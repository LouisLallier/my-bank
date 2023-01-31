import data from "../data.json";

const Accounts = () => {
  return (
    <div className="p-16">
      {data.map((account) => {
        return (
          <div className="flex flex-col content-center">
            <div
              style={{ backgroundColor: account.color }}
              className="m-8 flex justify-around rounded-lg p-4"
            >
              <h1 className="text-xl">{account.name}</h1>
              <div className="text-xl">{account.balance} $</div>
            </div>
            <div className="m-auto flex w-4/5 flex-col">
              {account.operations.map((ope) => {
                return (
                  <div className="relative flex rounded-md bg-white p-2">
                    <div className="w-32">{ope.date}</div>
                    <div>{ope.description}</div>
                    <div className="absolute right-5">{ope.amount} $</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accounts;
