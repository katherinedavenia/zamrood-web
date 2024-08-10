"use client";
import { Container } from "~/components/Container";
import { ProductCardLoader } from "~/components/ProductCardLoader";
import { ExploreMoreButton } from "~/components/ExploreMoreButton";
import { ProductCard } from "~/components/ProductCard";
import { ProductCardSmall } from "~/components/ProductCardSmall";
import { useGetDestinationProducts } from "~/hooks/useGetDestinationProducts";
import { ProductCardSmallLoader } from "~/components/ProductCardSmallLoader";

export const DestinationsSection = () => {
  const { data: destinations, isLoading, error } = useGetDestinationProducts();

  return (
    <div className="py-20">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-10">
          <p
            className="text-secondary text-[28px] sm:text-3xl font-bold leading-tight mb-2 sm:mb-1 sm:mr-10"
            style={{ fontFamily: "Unbounded" }}
          >
            Destinations
          </p>
          <ExploreMoreButton />
        </div>

        <div className="flex flex-col">
          {isLoading ? (
            <ProductCardLoader />
          ) : !destinations || error ? (
            <div className="text-base font-light py-4">No data available</div>
          ) : (
            destinations.data
              .slice(0, 4)
              .map(
                (
                  {
                    itinerary_id,
                    itinerary_name,
                    itinerary_day,
                    itinerary_slug,
                    partner_name,
                    itinerary_short_description,
                    related_galleries,
                    related_variant,
                  },
                  index
                ) => {
                  const images = related_galleries.map(
                    (gallery) => gallery.src
                  );

                  return (
                    <div key={itinerary_id}>
                      <ProductCard
                        url={`https://www.zamrood.com/destination/${itinerary_slug}`}
                        images={images}
                        alt={itinerary_name}
                        itineraryDay={itinerary_day}
                        itineraryName={itinerary_name}
                        partnerName={partner_name}
                        itineraryShortDescription={itinerary_short_description}
                        discountPrice={parseInt(
                          related_variant.itinerary_variant_disc_price
                        )}
                        publicPrice={parseInt(
                          related_variant.itinerary_variant_pub_price
                        )}
                        index={index}
                      />
                    </div>
                  );
                }
              )
          )}
        </div>

        <div
          className="overflow-x-auto"
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <div className="flex flex-row lg:grid lg:grid-cols-4 gap-6 carousel-container">
            {isLoading ? (
              <ProductCardSmallLoader />
            ) : !destinations || error ? (
              <div className="text-base font-light py-4">No data available</div>
            ) : (
              destinations.data
                .slice(4, 8)
                .map(
                  ({
                    itinerary_id,
                    itinerary_name,
                    itinerary_day,
                    itinerary_slug,
                    partner_name,
                    related_galleries,
                    related_variant,
                  }) => (
                    <div
                      key={itinerary_id}
                      className="w-[70vw] sm:w-[37vw] min-w-[70vw] sm:min-w-[37vw] lg:w-auto lg:min-w-0"
                    >
                      <ProductCardSmall
                        url={`https://www.zamrood.com/destination/${itinerary_slug}`}
                        src={related_galleries[0]?.src}
                        alt={
                          related_galleries[0]?.gallery_alt_text ||
                          itinerary_name
                        }
                        itineraryDay={itinerary_day}
                        itineraryName={itinerary_name}
                        partnerName={partner_name}
                        discountPrice={parseInt(
                          related_variant.itinerary_variant_disc_price
                        )}
                        publicPrice={parseInt(
                          related_variant.itinerary_variant_pub_price
                        )}
                      />
                    </div>
                  )
                )
            )}
          </div>
        </div>

        <div className="flex justify-center sm:justify-end mt-16 lg:mt-20">
          <ExploreMoreButton />
        </div>
      </Container>
    </div>
  );
};
