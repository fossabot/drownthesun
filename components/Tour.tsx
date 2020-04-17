import Concert from "./Concert"
import Navbar from "./Navbar"
import SectionHeadline from "./SectionHeadline"
const Tour = () => (
    <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-screen-lg">
            <SectionHeadline name="Upcoming Tour / Concerts"></SectionHeadline>

            <p className="max-w-2xl mt-4 text-xl text-gray-500 md:text-center leading-7 md:mx-auto">
                Mit dem neuen Album sind wir im Dezember wieder auf Tour. Oder sowas ähnliches.
            </p>
            <Concert country="GER" weekday="Fri" venue="Rock im Park" city="Nürnberg" date="Jun 5"></Concert>
            <Concert country="AUS" weekday="Thu" venue="Nova Rock" city="Kleylehof" date="Jun 11"></Concert>
            <Concert country="SWI" weekday="Thu" venue="Flugplatz Interlaken" city="Interlaken" date="Jun 19"></Concert>
            <Concert country="BEL" weekday="Fri" venue="Festivalpark Senehei" city="Dessel" date="Jun 20"></Concert>
            <Concert country="FRA" weekday="Sat" venue="Hellfest" city="Clisson" date="Jun 26"></Concert>
            <Concert
                country="GER"
                weekday="Fri"
                venue="Full Force Festival"
                city="Gräfenheinichen"
                date="Jul 9"
            ></Concert>
        </div>
    </div>
)

export default Tour
