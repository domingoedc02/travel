"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n/config";
import {
  bookingSchema,
  type BookingFormData,
} from "@/lib/validations/bookingSchema";
import { CheckCircle, Loader2 } from "lucide-react";

export function BookingForm() {
  const { t } = useI18n();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Booking Form Data:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white border border-sumi-200 rounded-xl text-sm text-sumi-800 placeholder:text-sumi-300 focus:outline-none focus:ring-2 focus:ring-aka-300 focus:border-aka-400 transition-all duration-200";
  const labelClasses = "block text-sm font-medium text-sumi-700 mb-1.5";
  const errorClasses = "text-xs text-red-500 mt-1";

  const tourOptions = t.services.packages.map((pkg) => ({
    value: pkg.id,
    label: pkg.name,
  }));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl"
          >
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <p className="text-sm text-green-700">{t.contact.form.success}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClasses}>
            {t.contact.form.name} *
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            placeholder={t.contact.form.namePlaceholder}
            className={inputClasses}
          />
          {errors.name && (
            <p className={errorClasses}>{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            {t.contact.form.email} *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder={t.contact.form.emailPlaceholder}
            className={inputClasses}
          />
          {errors.email && (
            <p className={errorClasses}>{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone and Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            {t.contact.form.phone} *
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder={t.contact.form.phonePlaceholder}
            className={inputClasses}
          />
          {errors.phone && (
            <p className={errorClasses}>{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="date" className={labelClasses}>
            {t.contact.form.date} *
          </label>
          <input
            id="date"
            type="date"
            {...register("date")}
            min={new Date().toISOString().split("T")[0]}
            className={inputClasses}
          />
          {errors.date && (
            <p className={errorClasses}>{errors.date.message}</p>
          )}
        </div>
      </div>

      {/* Passengers and Ride Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="passengers" className={labelClasses}>
            {t.contact.form.passengers} *
          </label>
          <select
            id="passengers"
            {...register("passengers")}
            className={inputClasses}
            defaultValue=""
          >
            <option value="" disabled>
              {t.contact.form.passengersPlaceholder}
            </option>
            {Array.from({ length: 8 }, (_, i) => (
              <option key={i + 1} value={String(i + 1)}>
                {i + 1}
              </option>
            ))}
          </select>
          {errors.passengers && (
            <p className={errorClasses}>{errors.passengers.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="rideType" className={labelClasses}>
            {t.contact.form.rideType} *
          </label>
          <select
            id="rideType"
            {...register("rideType")}
            className={inputClasses}
            defaultValue=""
          >
            <option value="" disabled>
              {t.contact.form.rideTypePlaceholder}
            </option>
            {tourOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.rideType && (
            <p className={errorClasses}>{errors.rideType.message}</p>
          )}
        </div>
      </div>

      {/* Special Requests */}
      <div>
        <label htmlFor="specialRequests" className={labelClasses}>
          {t.contact.form.specialRequests}
        </label>
        <textarea
          id="specialRequests"
          {...register("specialRequests")}
          placeholder={t.contact.form.specialRequestsPlaceholder}
          rows={4}
          className={inputClasses + " resize-none"}
        />
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3.5 bg-aka-500 text-white font-semibold rounded-xl hover:bg-aka-600 transition-colors duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {t.contact.form.submitting}
          </>
        ) : (
          t.contact.form.submit
        )}
      </motion.button>
    </form>
  );
}
