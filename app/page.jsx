"use client";
import Every from "@/components/every";
import Filter from "@/components/Filter";
import ForEach from "@/components/forEach";
import Map from "@/components/Map";
import Reduce from "@/components/reduce";
import Some from "@/components/some";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Map />
			<aside>======</aside>
			<Filter />
			<aside>======</aside>
			<Every />
			<aside>======</aside>
			<Some />
			<aside>======</aside>
			<ForEach />
			<aside>======</aside>
			<Reduce />
			<aside>======</aside>
		</main>
	);
}
