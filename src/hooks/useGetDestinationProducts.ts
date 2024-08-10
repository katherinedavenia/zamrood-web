import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";

interface Gallery {
  itinerary_id: string;
  gallery_id: string;
  gallery_alt_text: string;
  gallery_path: string;
  src: string;
  title: string;
}

interface Variant {
  itinerary_id: string;
  itinerary_variant_id: number;
  itinerary_variant_pub_price: string;
  itinerary_variant_disc_price: string;
  unit_name: string;
  related_unit: number | null;
}

interface DestinationProduct {
  itinerary_id: number;
  itinerary_name: string;
  itinerary_day: number;
  itinerary_slug: number;
  partner_name: string;
  partner_alias: string;
  itinerary_location: string;
  itinerary_short_description: string;
  itinerary_long_description: string;
  morph_class: string;
  related_galleries: Gallery[];
  related_variant: Variant;
}

interface DestinationProductsResponse {
  data: DestinationProduct[];
}

const fetchDestinationProducts =
  async (): Promise<DestinationProductsResponse> => {
    const { data } = await axios.get<DestinationProductsResponse>(
      "https://pandooin.com/api/zamrood/itinerary"
    );
    return data;
  };

export const useGetDestinationProducts =
  (): UseQueryResult<DestinationProductsResponse> => {
    return useQuery({
      queryKey: ["destinationProducts"],
      queryFn: fetchDestinationProducts,
    });
  };
