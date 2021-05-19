import list from "./configs/kakugen.json";

const findKakugen = (query: string) =>
  list.filter((item) => (Number(query) ? item.id === Number(query) : item.title.includes(query)));

export default async (query?: string) => {
  const kakugenList: Aikatsu[] = query ? findKakugen(query) : list;
  if (query && kakugenList.length === 0) {
    throw new Error(`${"(´- ₃ -`)"} ﾌﾞﾌﾞｰ、${query} は見つかりません`);
  }
  return kakugenList[Math.floor(Math.random() * kakugenList.length)];
};
