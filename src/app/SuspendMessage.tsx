const getMessage = async (): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "Hello Suspense";
};

const fetchMessage = async () => {
  const response = await getMessage();
  return response;
};

export const SuspendMessage = async () => {
  const message = await fetchMessage();
  return <div>{message}</div>;
};
