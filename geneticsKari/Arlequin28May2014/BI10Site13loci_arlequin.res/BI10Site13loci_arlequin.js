
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file://///psf/Shared%20PC%20folder/WinArl35/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (BI10Site13loci_arlequin.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 27/05/14 at 13:17:40", "BI10Site13loci_arlequin.htm#27_05_14at13_17_40"))
	insDoc(aux1, gLnk("R", "Settings", "BI10Site13loci_arlequin.htm#27_05_14at13_17_40_run_information"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "BI10Site13loci_arlequin.htm#27_05_14at13_17_40_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "BI10Site13loci_arlequin.htm#27_05_14at13_17_40_pop_amova"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "BI10Site13loci_arlequin.htm#27_05_14at13_17_40_pop_pairw_diff"))
	aux1 = insFld(foldersTree, gFld("Run of 27/05/14 at 13:19:02", "BI10Site13loci_arlequin.htm#27_05_14at13_19_02"))
	insDoc(aux1, gLnk("R", "Settings", "BI10Site13loci_arlequin.htm#27_05_14at13_19_02_run_information"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "BI10Site13loci_arlequin.htm#27_05_14at13_19_02_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "BI10Site13loci_arlequin.htm#27_05_14at13_19_02_pop_amova"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "BI10Site13loci_arlequin.htm#27_05_14at13_19_02_pop_pairw_diff"))
	aux1 = insFld(foldersTree, gFld("Run of 27/05/14 at 14:18:32", "BI10Site13loci_arlequin.htm#27_05_14at14_18_32"))
	insDoc(aux1, gLnk("R", "Settings", "BI10Site13loci_arlequin.htm#27_05_14at14_18_32_run_information"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "BI10Site13loci_arlequin.htm#27_05_14at14_18_32_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "BI10Site13loci_arlequin.htm#27_05_14at14_18_32_pop_amova"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "BI10Site13loci_arlequin.htm#27_05_14at14_18_32_pop_pairw_diff"))
	aux1 = insFld(foldersTree, gFld("Run of 27/05/14 at 14:22:55", "BI10Site13loci_arlequin.htm#27_05_14at14_22_55"))
	insDoc(aux1, gLnk("R", "Settings", "BI10Site13loci_arlequin.htm#27_05_14at14_22_55_run_information"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "BI10Site13loci_arlequin.htm#27_05_14at14_22_55_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "BI10Site13loci_arlequin.htm#27_05_14at14_22_55_pop_amova"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "BI10Site13loci_arlequin.htm#27_05_14at14_22_55_pop_pairw_diff"))
	aux1 = insFld(foldersTree, gFld("Run of 28/05/14 at 06:08:43", "BI10Site13loci_arlequin.htm#28_05_14at06_08_43"))
	insDoc(aux1, gLnk("R", "Settings", "BI10Site13loci_arlequin.htm#28_05_14at06_08_43_run_information"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "BI10Site13loci_arlequin.htm#28_05_14at06_08_43_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "BI10Site13loci_arlequin.htm#28_05_14at06_08_43_pop_amova"))
	aux1 = insFld(foldersTree, gFld("Run of 28/05/14 at 06:10:19", "BI10Site13loci_arlequin.htm#28_05_14at06_10_19"))
	insDoc(aux1, gLnk("R", "Settings", "BI10Site13loci_arlequin.htm#28_05_14at06_10_19_run_information"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "BI10Site13loci_arlequin.htm#28_05_14at06_10_19_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "BI10Site13loci_arlequin.htm#28_05_14at06_10_19_pop_amova"))
