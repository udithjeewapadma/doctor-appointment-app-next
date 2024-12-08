import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

function Doctor() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Image Section */}
          <div className="order-1 md:order-2">
            <Image
              src="/doctors.jpg"
              width={850}
              height={850}
              className="rounded-3xl mx-auto"
              alt="Doctors"
            />
          </div>

          {/* Text Section */}
          <div className="order-2 md:order-1">
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Find & Book <span className="text-purple-500">Appointment</span> with your Favorite{' '}
                <span className="text-purple-500">Doctors!!!!</span>
              </h2>

              <p className="mt-4 text-gray-500">
                Easily connect with trusted healthcare professionals for personalized care. Book
                your appointments online and prioritize your health with just a few clicks. Your
                wellness journey starts here.
              </p>

              <Button className="mt-5">Explore Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Doctor;
