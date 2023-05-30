

const SectionTitle = ({ heading, subHeading }) => {
      return (
            <div className="md:w-[400px] w-8/12 mx-auto mb-12">
                  <p className="text-[#D99904] italic text-center text-xs md:text-xl">{subHeading}</p>
                  <h3 className="text-lg md:text-3xl uppercase border-y-4 text-center my-2 py-1 md:my-4 md:py-3">{heading}</h3>
            </div>
      );
};

export default SectionTitle;