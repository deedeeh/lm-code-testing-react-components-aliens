

export const ErrorMessage: React.FC<{message: string | undefined}> = ({ message }) => (
  <div>
    <p className='error-message'>{message}</p>
  </div>
)

export default ErrorMessage;