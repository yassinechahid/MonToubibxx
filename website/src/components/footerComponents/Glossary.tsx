import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Glossary = () => {
  const { t } = useTranslation();

  const getContainerItems = (containerNumber: number) => {
    let itemCount;

    switch (containerNumber) {
      case 5:
      itemCount = 6;
      break;
      case 3:
      itemCount = 6;
      break;
      case 6:
        itemCount = 4;
        break;
      case 8:
      case 9:
        itemCount = 3;
        break;
      default:
        itemCount = 5;
    }

    const items = [];
    for (let i = 1; i <= itemCount; i++) {
      items.push({
        title: t(`glossary.container${containerNumber}.item${i}.title`),
        description: t(
          `glossary.container${containerNumber}.item${i}.description`
        ),
      });
    }
    return items;
  };

  // Container titles
  const containerTitles = [
    t("glossary.container1.title"),
    t("glossary.container2.title"),
    t("glossary.container3.title"),
    t("glossary.container4.title"),
    t("glossary.container5.title"),
    t("glossary.container6.title"),
    t("glossary.container7.title"),
    t("glossary.container8.title"),
    t("glossary.container9.title"),
  ];

  return (
    <section className="w-full max-w-screen-2xl p-6">
      <div className="space-y-8">
        {containerTitles.map((title, containerIndex) => {
          const containerNumber = containerIndex + 1;
          const items = getContainerItems(containerNumber);

          let leftItemsCount;
          if (
            containerNumber === 6 ||
            containerNumber === 8 ||
            containerNumber === 9
          ) {
            leftItemsCount = 2;
          } else {
            leftItemsCount = 3;
          }

          const leftColumnItems = items.slice(0, leftItemsCount);
          const rightColumnItems = items.slice(leftItemsCount);

          return (
            <div key={containerIndex} className="space-y-4">
              <motion.span
                className="block text-light-tertiary font-bold text-title-large"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * containerIndex, duration: 0.5 }}
              >
                {title}
              </motion.span>

              <motion.div
                className="bg-light-surfaceContainerLowest rounded-2xl p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 * containerIndex + 0.1,
                  duration: 0.5,
                }}
              >
                <div className="flex flex-col lg:flex-row gap-12">
                  {/* Left Column */}
                  <div className="lg:w-1/2">
                    <div className="space-y-6">
                      {leftColumnItems.map((item, index) => (
                        <div key={index} className="space-y-1">
                          <h4 className="text-title-medium font-semibold text-light-primary">
                            {item.title}
                          </h4>
                          <p className="text-body-large text-light-onSurfaceVariant">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="lg:w-1/2">
                    <div className="space-y-6">
                      {rightColumnItems.map((item, index) => (
                        <div key={index} className="space-y-1">
                          <h4 className="text-title-medium font-semibold text-light-primary">
                            {item.title}
                          </h4>
                          <p className="text-body-large text-light-onSurfaceVariant">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Glossary;
