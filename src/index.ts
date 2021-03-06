import { kakugenList as list } from "./configs/kakugen.js";

export type Aikatsu = {
  id: number;
  title: string;
  link: string;
};

const findKakugen = (query: string) =>
  list.filter((item) => (Number(query) ? item.id === Number(query) : item.title.includes(query)));

export const aikatsu = async (query?: string) => {
  const kakugenList: Aikatsu[] = query ? findKakugen(query) : list;
  if (query && kakugenList.length === 0) {
    throw new Error(`${"(´- ₃ -`)"} ﾌﾞﾌﾞｰ、${query} は見つかりません`);
  }
  return kakugenList[Math.floor(Math.random() * kakugenList.length)];
};

export default aikatsu;
