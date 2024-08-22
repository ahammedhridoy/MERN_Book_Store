import React from "react";
// react icons
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import profile from "../../assets/profile.jpg";

const ReviewCard = () => {
  return (
    <div className="space-y-6">
      <div className="flex gap-2 text-amber-500">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

      {/* texts */}
      <div className="mt-7">
        <p className="mb-5">
          This book is a game-changer for anyone looking to build better habits
          or break bad ones. James Clear offers practical advice backed by
          science, making it easy to understand and apply to your daily life.
          The concepts of habit stacking and the 1% improvement really resonated
          with me. A must-read for personal development enthusiasts.
        </p>

        <h5 className="text-lg font-medium">Mark Ping</h5>
        <p className="text-sm"> CEO, ABC Company</p>
      </div>
    </div>
  );
};

export default ReviewCard;
