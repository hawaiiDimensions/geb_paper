
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file://///psf/Shared%20PC%20folder/WinArl35/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (Quasimodo_CO1_arlequin_withinHI.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 28/05/14 at 07:24:59", "Quasimodo_CO1_arlequin_withinHI.htm#28_05_14at07_24_59"))
	insDoc(aux1, gLnk("R", "Settings", "Quasimodo_CO1_arlequin_withinHI.htm#28_05_14at07_24_59_run_information"))
		aux2 = insFld(aux1, gFld("Shared haplotypes", "Quasimodo_CO1_arlequin_withinHI.htm#28_05_14at07_24_59_shared%20haplotypes"))
		insDoc(aux2, gLnk("R", "HUALALAI", "Quasimodo_CO1_arlequin_withinHI.htm#28_05_14at07_24_59_gr_shared0"))
		insDoc(aux2, gLnk("R", "KIPUKAS", "Quasimodo_CO1_arlequin_withinHI.htm#28_05_14at07_24_59_gr_shared1"))
		insDoc(aux2, gLnk("R", "LAUPAHOEHOE", "Quasimodo_CO1_arlequin_withinHI.htm#28_05_14at07_24_59_gr_shared2"))
		insDoc(aux2, gLnk("R", "PUUMAKAALA", "Quasimodo_CO1_arlequin_withinHI.htm#28_05_14at07_24_59_gr_shared3"))
		insDoc(aux2, gLnk("R", "KOHALA", "Quasimodo_CO1_arlequin_withinHI.htm#28_05_14at07_24_59_gr_shared4"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "Quasimodo_CO1_arlequin_withinHI.htm#28_05_14at07_24_59_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "Quasimodo_CO1_arlequin_withinHI.htm#28_05_14at07_24_59_pop_amova"))
