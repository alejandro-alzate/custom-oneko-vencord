/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
	name: "arcaneko",
	description: "cat follow mouse (real), Un gato persigue tu puntero (ArCat Tematizado); creadores originales Ven & adryd",
	// Listing adryd here because this literally just evals her script
	authors: [Devs.Ven, Devs.adryd],


	start() {
		fetch("https://raw.githubusercontent.com/alejandro-alzate/custom-oneko-vencord/main/arcaneko.js")
			.then(x => x.text())
			.then(s => s.replace("./arcaneko.gif", "https://raw.githubusercontent.com/alejandro-alzate/custom-oneko-vencord/main/arcaneko.gif")
				.replace("(isReducedMotion)", "(false)"))
			.then(eval);
		//console.log("Plugin activado");
	},

	stop() {
		document.getElementById("arcaneko")?.remove();
		//console.log("Plugin desactivado");
	}
});
