import React from "react";
import Image from "./Image";
import clubhouse from "../images/clubhouse.png";
import elonmusk from "../images/elonmusk.png";
import goat from "../images/goat.png";
import homer from "../images/homer.png";
import theweekend from "../images/theweekend.png";
import tigerwoods from "../images/tigerwoods.png";
import wallst from "../images/wallst.png";
import wasted from "../images/wasted.png";
import weekend from "../images/weekend.png";
import youngthug from "../images/youngthug.png";
import Text from "./Text";
import TextCollector from "../images.text/TextCollector";

const SnapPage: React.FC = () => {

  /*
    The first pictures are added manually, the rest will be fetched from the database
    and added to the page with a map function to avoid repetition.
  */

    const text: string = "hei";

    const clubhouseText: string = TextCollector.getClubhouse();
    const elonmuskText: string = TextCollector.getElonmusk();
    const goatText: string = TextCollector.getGoat();
    // const homerText: string = TextCollector.getHomer();
    const tigerwoodsText: string = TextCollector.getTiger();
    const wallstText: string = TextCollector.getWallst();
    const wastedText: string = TextCollector.getWasted();
    const weekendText: string = TextCollector.getWeeknd();
    // const youngthugText: string = TextCollector.getYoungthug();

    const clubHouseHeader: string = "Clubhouse";
    const elonMuskHeader: string = "Elon Musk";
    const goatHeader: string = "GOAT";
    const homerHeader: string = "Homer";
    const tigerWoodsHeader: string = "Tiger Woods";
    const wallstHeader: string = "WallStreetBets";
    const wastedHeader: string = "Wasted";
    const weekendHeader: string = "The Weekend";
    const youngThugHeader: string = "Young Thug";

  return (
      <>
        <div className="snap-y snap-mandatory h-screen overflow-scroll transition-all duration-1000">
          <div className="snap-start bg-white w-screen h-screen flex items-center justify-center text-8xl">
            <div className="flex items-center justify-center">
              <Image image={wasted} />
              <Text header={wastedHeader} text={wastedText} />
            </div>
          </div>
          <div className="snap-start w-screen h-screen flex items-center justify-center text-8xl">
            <div className="flex items-center justify-center">
              <Image image={tigerwoods} />
              <Text header={tigerWoodsHeader} text={tigerwoodsText} />
            </div>
          </div>
          <div className="snap-start w-screen h-screen flex items-center justify-center text-8xl">
            <div className="flex items-center justify-center">
              <Image image={clubhouse} />
              <Text header={clubHouseHeader} text={clubhouseText} />
            </div>
          </div>
          <div className="snap-start w-screen  h-screen flex items-center justify-center text-8xl">
            <div className="flex items-center justify-center">
              <Image image={elonmusk} />
              <Text header={elonMuskHeader} text={elonmuskText} />
            </div>
          </div>
          <div className="snap-start w-screen h-screen flex items-center justify-center text-8xl">
            <div className="flex items-center justify-center">
              <Image image={goat} />
              <Text header={goatHeader} text={goatText} />
            </div>
          </div>
          <div className="snap-start w-screen h-screen flex items-center justify-center text-8xl">
            <div className="flex items-center justify-center">
              <Image image={homer} />
              <Text header={homerHeader} text={"TEXT"} />
            </div>
          </div>
          <div className="snap-start w-screen h-screen flex items-center justify-center text-8xl">
            <div className="flex items-center justify-center">
              <Image image={theweekend} />
              <Text header={weekendHeader} text={weekendText} />
            </div>
          </div>
          <div className="snap-start w-screen h-screen flex items-center justify-center text-8xl">
            <div className="flex items-center justify-center">
              <Image image={weekend} />
              <Text header={weekendHeader} text={"TEXT"} />
            </div>
          </div>
          <div className="snap-start w-screen h-screen flex items-center justify-center text-8xl">
            <div className="flex items-center justify-center">
              <Image image={wallst} />
              <Text header={wallstHeader} text={wallstText} />
            </div>
          </div>
          <div className="snap-start w-screen h-screen flex items-center justify-center text-8xl">
            <div className="flex items-center justify-center">
              <Image image={youngthug} />
              <Text header={youngThugHeader} text={"TEXT"} />
            </div>
          </div>
        </div>
      </>
  );
}

export default SnapPage;