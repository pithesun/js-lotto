const LOTTO = {
  LOTTO_COUNT_PER_ONE_TICKET: 6,
  LOTTO_PRICE_PER_ONE_TICKET: 1000,
  LOTTO_NUMBER_MIN: 1,
  LOTTO_NUMBER_MAX: 45,
  LOTTO_WINNING_CNT: Object.freeze({
    THREE: "3",
    FOUR: "4",
    FIVE: "5",
    FIVEPLUS: "5bonus",
    SIX: "6",
  }),
  LOTTO_WINNING_CNT_NUM: Object.freeze({
    3: "THREE",
    4: "FOUR",
    5: "FIVE",
    "5bonus": "FIVEPLUS",
    6: "SIX",
  }),
};

const ERROR_MESSAGES = {
  WRONG_INPUT: "입력하신 금액이 유효하지 않습니다.",
  DUPLICATED_NUMBERS: "중복된 숫자들이 있습니다.",
};

const WINNING_AMOUNT = {
  [LOTTO.LOTTO_WINNING_CNT.THREE]: 5000,
  [LOTTO.LOTTO_WINNING_CNT.FOUR]: 50000,
  [LOTTO.LOTTO_WINNING_CNT.FIVE]: 1500000,
  [LOTTO.LOTTO_WINNING_CNT.FIVEPLUS]: 30000000,
  [LOTTO.LOTTO_WINNING_CNT.SIX]: 2000000000,
};
Object.freeze(WINNING_AMOUNT);

export { LOTTO, ERROR_MESSAGES, WINNING_AMOUNT };
