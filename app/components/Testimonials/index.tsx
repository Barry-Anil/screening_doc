"use client"
import React, { LegacyRef, useCallback, useEffect, useRef, useState } from "react";
import  styles from "./index.module.css";
import Image from "next/image";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel";
import SectionHeading from "../SectionHeading";
import { DotButton, NextButton, PrevButton } from "../CarouselButtons";


const Testimonials = ({ testimonials }: { testimonials: any[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const testimonialArray = testimonials;

  const emblaRef = useRef<EmblaCarouselType>(null);
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);

  useEffect(() => {
    if (emblaRef.current) {
      setEmblaApi(emblaRef.current);
    }
  }, [emblaRef]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSlideChange);
  }, [emblaApi]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSlideChange = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap);
    }
  }, [emblaApi]);

  const renderSingleTestimonial = (item: any, key: number) => {
    return (
      <div className={`row embla__slide ${styles.testimonial}`} key={key}>
        {/* Image */}
        <div style={{ flex: 1 }} className="row">
          <div className={styles.avatar}>
            <Image src={item.userImage} alt="Health is Wealth" />
          </div>
          {/* Name */}
          <div className={styles.userInfoUnit}>
            <h3>{item.userName}</h3>
            <p>{item.userSubHeading}</p>
          </div>
        </div>
        {/* Text */}
        <div className={`${styles.testimonialText}`}>
          <p>{`" ${item.reviewText} "`}</p>
        </div>
      </div>
    );
  };

const renderDots = () => {
    return (
        <div className={`row ${styles.dotContainer}`}>
            {testimonialArray.map((_, index) => {
                return (
                    <DotButton
                        key={index}
                        selected={index == selectedIndex}
                        clickHandler={() => scrollTo(index)}
                    />
                );
            })}
        </div>
    );
};
  return (
    <section className={"margin-on-side"} style={{ marginBottom: "4rem" }}>
      <div className={`${styles.testimonialContainer}`}>
        {/* Heading */}
        <div className="row center">
          <SectionHeading
            headingTitle="What our customer are saying"
            color={"#fff"}
          />
        </div>
        <div className="embla" ref={emblaRef as unknown as LegacyRef<HTMLDivElement>}>
          <div className="embla__container">
            {testimonialArray.map((item, index) =>
              renderSingleTestimonial(item, index)
            )}
          </div>
        </div>
      </div>
      <div className={`${styles.carouselNavContainer} row center`}>
        <PrevButton clickHandler={scrollPrev} />
        {renderDots()}

        <NextButton clickHandler={scrollNext} />
      </div>
    </section>
  );
};



export default Testimonials;