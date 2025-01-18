const LoadingIndicator = () => {
  return (
    <span className="flex w-full items-center justify-center">
      <span className="flex space-x-0.5 justify-center items-center h-screen dark:invert">
        <span className="h-0.5 w-0.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
        <span className="h-1 w-1 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
        <span className="h-0.5 w-0.5 bg-zinc-400 rounded-full animate-bounce" />
      </span>
    </span>
  );
};

export default LoadingIndicator;
