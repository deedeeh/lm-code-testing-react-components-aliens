export const ErrorMessage: React.FC<{message: string | undefined}> = ({ message }) => 
  <p className='error-message'>{message}</p>


export default ErrorMessage;