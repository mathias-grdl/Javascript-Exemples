"use client";
import Every from "@/components/every";
import Fill from "@/components/fill";
import Filter from "@/components/Filter";
import Find from "@/components/find";
import FindIndex from "@/components/findIndex";
import Flat from "@/components/flat";
import FlatMap from "@/components/flatMap";
import ForEach from "@/components/forEach";
import Includes from "@/components/includes";
import Map from "@/components/Map";
import Reduce from "@/components/reduce";
import Some from "@/components/some";
import Sort from "@/components/sort";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Map />
			<aside>====== Filter ======</aside>
			<Filter />
			<aside>====== Every ======</aside>
			<Every />
			<aside>====== Some ======</aside>
			<Some />
			<aside>====== ForEach ======</aside>
			<ForEach />
			<aside>====== Reduce ======</aside>
			<Reduce />
			<aside>====== Find ======</aside>
			<Find />
			<aside>====== FindIndex ======</aside>
			<FindIndex />
			<aside>====== includes ======</aside>
			<Includes />
			<aside>====== sort ======</aside>
			<Sort />
			<aside>====== fill ======</aside>
			<Fill />
			<aside>====== flat ======</aside>
			<Flat />
			<aside>====== flatMap ======</aside>
			<FlatMap />
			<aside>====== xxx ======</aside>
			<aside>====== xxx ======</aside>
			<aside>====== xxx ======</aside>
		</main>
	);
}
