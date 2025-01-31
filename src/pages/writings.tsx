import Header from "@/../components/Header";
import LatestWritings from "@/../components/home/LatestWritings";
import Subscribe from "@/../components/home/Subscribe";

export default function Writings() {
  return (
    <>
      <Header header="Writings - Read all my latest articles here 🗞️" />
      <LatestWritings />
      <Subscribe />
    </>
  );
}
