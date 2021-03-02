export const getBalanceBnb = async (account) => {
  return window.web3.eth.getBalance(account, function (error, result) {
    if (error) {
      return error;
    } else {
      return result;
    }
  });
};
