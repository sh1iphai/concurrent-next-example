const getMessage = async (): Promise<string[]> => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return ["First comment", "Second Comment"];
};

const fetchMessage = async () => {
  const response = await getMessage();
  return response;
};

export const Comments = async () => {
  const messages = await fetchMessage();
  return (
    <section>
      {messages.map((message) => (
        <div>{message}</div>
      ))}
    </section>
  );
};
