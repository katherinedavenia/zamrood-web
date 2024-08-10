import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";

interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  featured_image: string;
  featured_image_caption: string;
  read_time: string;
}

interface ArticlesResponse {
  data: Article[];
}

const fetchArticles = async (): Promise<ArticlesResponse> => {
  const { data } = await axios.get<ArticlesResponse>(
    "https://pandooin.com/api/zamrood/article"
  );
  return data;
};

export const useGetArticles = (): UseQueryResult<ArticlesResponse> => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
  });
};
