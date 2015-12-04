
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file:///C:/Program%20Files/Arlequin/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (sproati.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 08/05/14 at 15:35:02", "sproati.htm#08_05_14at15_35_02"))
	insDoc(aux1, gLnk("R", "Settings", "sproati.htm#08_05_14at15_35_02_run_information"))
		aux2 = insFld(aux1, gFld("Shared haplotypes", "sproati.htm#08_05_14at15_35_02_shared%20haplotypes"))
		insDoc(aux2, gLnk("R", "Saddle4100", "sproati.htm#08_05_14at15_35_02_gr_shared0"))
		insDoc(aux2, gLnk("R", "Saddle4700", "sproati.htm#08_05_14at15_35_02_gr_shared1"))
		insDoc(aux2, gLnk("R", "Saddle5400", "sproati.htm#08_05_14at15_35_02_gr_shared2"))
		insDoc(aux2, gLnk("R", "Kapapala4200", "sproati.htm#08_05_14at15_35_02_gr_shared3"))
		insDoc(aux2, gLnk("R", "Kapapala4800", "sproati.htm#08_05_14at15_35_02_gr_shared4"))
		insDoc(aux2, gLnk("R", "KonaHema4100", "sproati.htm#08_05_14at15_35_02_gr_shared5"))
		insDoc(aux2, gLnk("R", "SouthKona4800", "sproati.htm#08_05_14at15_35_02_gr_shared6"))
		insDoc(aux2, gLnk("R", "Stainback3200", "sproati.htm#08_05_14at15_35_02_gr_shared7"))
		insDoc(aux2, gLnk("R", "Stainback3600", "sproati.htm#08_05_14at15_35_02_gr_shared8"))
		insDoc(aux2, gLnk("R", "Laupahoehoe4000", "sproati.htm#08_05_14at15_35_02_gr_shared9"))
		insDoc(aux2, gLnk("R", "Laupahoehoe4800", "sproati.htm#08_05_14at15_35_02_gr_shared10"))
		insDoc(aux2, gLnk("R", "Kohala", "sproati.htm#08_05_14at15_35_02_gr_shared11"))
		aux2 = insFld(aux1, gFld("Samples", ""))
		insDoc(aux2, gLnk("R", "Saddle4100", "sproati.htm#08_05_14at15_35_02_group0"))
		insDoc(aux2, gLnk("R", "Saddle4700", "sproati.htm#08_05_14at15_35_02_group1"))
		insDoc(aux2, gLnk("R", "Saddle5400", "sproati.htm#08_05_14at15_35_02_group2"))
		insDoc(aux2, gLnk("R", "Kapapala4200", "sproati.htm#08_05_14at15_35_02_group3"))
		insDoc(aux2, gLnk("R", "Kapapala4800", "sproati.htm#08_05_14at15_35_02_group4"))
		insDoc(aux2, gLnk("R", "KonaHema4100", "sproati.htm#08_05_14at15_35_02_group5"))
		insDoc(aux2, gLnk("R", "SouthKona4800", "sproati.htm#08_05_14at15_35_02_group6"))
		insDoc(aux2, gLnk("R", "Stainback3200", "sproati.htm#08_05_14at15_35_02_group7"))
		insDoc(aux2, gLnk("R", "Stainback3600", "sproati.htm#08_05_14at15_35_02_group8"))
		insDoc(aux2, gLnk("R", "Laupahoehoe4000", "sproati.htm#08_05_14at15_35_02_group9"))
		insDoc(aux2, gLnk("R", "Laupahoehoe4800", "sproati.htm#08_05_14at15_35_02_group10"))
		insDoc(aux2, gLnk("R", "Kohala", "sproati.htm#08_05_14at15_35_02_group11"))
		aux2 = insFld(aux1, gFld("Within-samples summary", ""))
		insDoc(aux2, gLnk("R", "Basic indices", "sproati.htm#08_05_14at15_35_02_comp_sum_Basic"))
		insDoc(aux2, gLnk("R", "Heterozygosity", "sproati.htm#08_05_14at15_35_02_comp_sum_het"))
		insDoc(aux2, gLnk("R", "No. of alleles", "sproati.htm#08_05_14at15_35_02_comp_sum_numAll"))
		insDoc(aux2, gLnk("R", "Molecular diversity", "sproati.htm#08_05_14at15_35_02_comp_sum_moldiv"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "sproati.htm#08_05_14at15_35_02_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "sproati.htm#08_05_14at15_35_02_pop_amova"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "sproati.htm#08_05_14at15_35_02_pop_pairw_diff"))
		insDoc(aux2, gLnk("R", "Exact tests", "sproati.htm#08_05_14at15_35_02_pop_exct_tests"))
