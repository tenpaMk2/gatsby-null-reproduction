import React from "react";

const isInvalidDate = (date) => Number.isNaN(date.getTime());

export const Clock = ({ date }) => {
  const d = new Date(date);

  if (isInvalidDate(d)) return null;

  const { locale, intlYear, intlMonthAndDate, intlTime } = {
    locale: `ja-JP`,
    intlYear: { year: `numeric` },
    intlMonthAndDate: {
      month: `short`,
      day: `numeric`,
    },
    intlTime: {
      timeStyle: `short`,
      hour12: false,
    },
  };

  return (
    <time
      dateTime={d.toISOString()}
      className="flex flex-none flex-col justify-center text-center"
      itemProp="dateCreated datePublished"
    >
      <span className="text-base text-gray-300 md:text-lg">
        {new Intl.DateTimeFormat(locale, intlYear).format(d)}
      </span>
      <span className="text-lg md:text-2xl">
        {new Intl.DateTimeFormat(locale, intlMonthAndDate).format(d)}
      </span>
      <span className="text-sm text-gray-300">
        {new Intl.DateTimeFormat(locale, intlTime).format(d)}
      </span>
    </time>
  );
};
