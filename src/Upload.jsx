import { useState } from 'react';
import './Upload.css'; // Import the CSS file

const PredictForm = () => {
    const openInNewTab = () => {
        const imageUrl = `data:image/png;base64,${image}`;
        const newWindow = window.open();
        newWindow.document.write(`<img src="${imageUrl}" style="width: 100%; height: 100%; object-fit: contain;" />`);
        newWindow.document.title = "Explanation Image";
    };

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);
    const [image, setImage] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) return;

        setLoading(true);
        setResults(null);
        setImage(null);

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:8000/predict/', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();


            setResults(data.results);
            setImage(data.image);
        } catch (error) {
            console.error('Error uploading file:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="predict-form-container">
            <form onSubmit={handleSubmit} className="predict-form">
                <input type="file" onChange={handleFileChange} className="file-input" />
                <button type="submit" className="submit-button">Upload and Predict</button>
            </form>
            <div className='result-container'>
                {loading && (
                    <div className="loading-container">
                        <div className="spinner"></div>
                    </div>
                )}
                {image && (
                    <div className="image-container-res">
                        <h2>Explanation Image</h2>
                        <div className="explanation-image" onClick={openInNewTab}>
                            <img src={`data:image/png;base64,${image}`} alt="Explanation" />
                        </div>
                    </div>
                )}
                {results &&
                    <h4>Overlap between the explained and detected regions boosts confidence in the model&apos;s decision, <br />while a lack of overlap suggests the need for a clinician&apos;s second opinion.</h4>
                }
                {results && (
                    <div className="results-container">
                        <h2>Results</h2>
                        <table className="results-table">
                            <thead>
                                <tr>
                                    <th>Model</th>
                                    <th>Prediction</th>
                                    <th>Confidence</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((result, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            result.model === "VGG19"
                                                ? result.prediction === "Abnormal"
                                                    ? "red-row"
                                                    : "green-row"
                                                : ""
                                        }
                                    >
                                        <td><strong>{result.model}</strong></td>
                                        <td>{result.prediction}</td>
                                        <td>{result.confidence}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PredictForm;