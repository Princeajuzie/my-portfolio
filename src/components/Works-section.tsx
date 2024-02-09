import Isotope from "isotope-layout";
import React from "react";
export function Workssection() {
  const isotope = React.useRef<Isotope | null>();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState("*");

  // React.useEffect(() => {
  //   isotope.current = new Isotope(".filter-container", {
  //     itemSelector: ".filter-item",
  //     layoutMode: "fitRows"
  //   });
  //   // cleanup
  //   return () => isotope?.current?.destroy();
  // }, []);

  React.useEffect(() => {
    if (filterKey === "*") isotope.current?.arrange({ filter: `*` });
    else isotope.current?.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key: string) => () => setFilterKey(key);
  return (
    <div className="pt-[30px] pb-0">
      <div className="pt-0 basis-full max-w-full">
        <div className="flex justify-between lg:flex-row flex-col  lg:flex lg:px-8 px-2 lg:items-center lg:text-center lg:justify-center">
          <div className="self-center relative mb-[30px] w-full ">
            <h4 className="text-[17px] font-[600] text-white mb-[30px] lg:text-start text-center">Works</h4>
          </div>

          <div className="pb-[30px]">
            <div className="lg:w-max  ">
              <div className="flex flex-row  items-center justify-center">
                {/* filter link */}
                <a href="#" data-filter="*" className="relative uppercase text-[12px] inline-block mr-[15px] text-[#8c8c8e] font-[600] transition ease-in-out hover:text-white hover:text-shadow">
                  All Categories
                </a>
                {/* filter link */}
                <a href="#" data-filter=".webTemplates" className="relative uppercase text-[12px] inline-block mr-[15px] text-[#8c8c8e] font-[600] transition ease-in-out hover:text-white hover:text-shadow">
                  Web 
                </a>
                {/* filter link */}
                <a
                  href="#"
                  data-filter=".logos"
                  className="relative uppercase text-[12px] inline-block mr-[15px] text-[#8c8c8e] font-[600] transition ease-in-out hover:text-white hover:text-shadow"
                >
                  Server
                </a>
                {/* filter link */}
                <a href="#" data-filter=".drawings" className="relative uppercase text-[12px] inline-block mr-[15px] text-[#8c8c8e] font-[600] transition ease-in-out hover:text-white hover:text-shadow">
                  App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workssection;
