"use client";
import Every from "@/components/every";
import Filter from "@/components/Filter";
import Find from "@/components/find";
import FindIndex from "@/components/findIndex";
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
			<aside>====== xxx ======</aside>
		</main>
	);
}
