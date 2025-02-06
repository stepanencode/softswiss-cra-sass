const extractLastWordForStyling = (text, className) => {
  if (!text?.trim()) return '';
  const words = text.trim().split(' ');
  return (
    <>
      {words.slice(0, -1).join(' ')}{' '}
      <span className={className}>{words.at(-1)}</span>
    </>
  );
};

export default extractLastWordForStyling;
