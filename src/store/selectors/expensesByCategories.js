import { createSelector } from "@reduxjs/toolkit";

const getTransacoes = (state) => state.transactions.transactions;

export const expensesByCategories = createSelector(
  [getTransacoes],
  (transactions) => {
    return transactions
      .filter((transacao) => transacao.tipo === "despesa")
      .reduce((valorAcumulado, transacao) => {
        valorAcumulado[transacao.categoria] =
          (valorAcumulado[transacao.categoria] || 0) +
          parseFloat(transacao.valor);
        return valorAcumulado;
      }, {});
  }
);
