import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import axios from "axios";
import "../index.css"

import "swiper/css";
import { siteImage } from '../utils/siteImages';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';
        const res = await axios.get(`${API_URL}/api/reviews?type=whatsapp`);
        const approvedReviews = res.data.filter(r => r.isApproved !== false);
        setReviews(approvedReviews);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const defaultReviews = [
    { _id: 'local-1', image: siteImage('review-1'), isLocal: true },
    { _id: 'local-2', image: siteImage('review-2'), isLocal: true },
    { _id: 'local-3', image: siteImage('review-3'), isLocal: true },
    { _id: 'local-4', image: siteImage('review-4'), isLocal: true },
    { _id: 'local-5', image: siteImage('review-5'), isLocal: true },
    { _id: 'local-6', image: siteImage('review-6'), isLocal: true },
    { _id: 'local-7', image: siteImage('review-7'), isLocal: true },
    { _id: 'local-8', image: siteImage('review-8'), isLocal: true },
    { _id: 'local-9', image: siteImage('review-9'), isLocal: true },
  ];

  const displayReviews = [...reviews, ...defaultReviews];

  return (
    <section className="py-6 bg-[#fdfbf7]">

      {/* Title */}
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#064e3b]">
          Honest <span className="italic text-[#c5a059]">Reflections</span>
        </h2>
        <p className="text-lg text-[#064e3b]">The real results from the people who have tried it</p>
      </div>

      {/* Narrow centered container */}
      <div className="max-w-3xl mx-auto">

        <Swiper
          centeredSlides={true}
          loop={displayReviews.length >= 6}
          grabCursor={true}

          slidesPerView={1.5}
          spaceBetween={15}
          breakpoints={{
            640: {
              slidesPerView: 1.7,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 25,
            },
          }}
          modules={[Autoplay]}
          className="reviewSwiper touch-pan-y"
        >
          {displayReviews.map((review, idx) => (
            <SwiperSlide key={review._id || idx}>
              <div className="review-card">
                <img
                  src={review.image}
                  alt="review"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default ReviewSection;