import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-animation">
          <div className="error-number">4</div>
          <div className="error-orb">0</div>
          <div className="error-number">4</div>
        </div>

        <h1 className="error-title">Page Not Found</h1>

        <p className="error-message">
          Oops! The page you're looking for seems to have wandered off into the digital void.
        </p>

        <div className="error-actions">
          <button
            className="primary-btn"
            onClick={() => navigate(-1)}
          >
            ← Go Back
          </button>
          <button
            className="secondary-btn"
            onClick={() => navigate('/')}
          >
            Go Home
          </button>
        </div>
      </div>

      <div className="error-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
    </div>
  );
}

export default NotFound;