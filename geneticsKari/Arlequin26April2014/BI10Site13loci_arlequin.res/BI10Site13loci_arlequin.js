
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file:///C:/Program%20Files/Arlequin/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (BI10Site13loci_arlequin.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 26/04/14 at 15:48:18", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18"))
	insDoc(aux1, gLnk("R", "Settings", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_run_information"))
		aux2 = insFld(aux1, gFld("Samples", ""))
		insDoc(aux2, gLnk("R", "06FBa", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_group0"))
		insDoc(aux2, gLnk("R", "0807a", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_group1"))
		insDoc(aux2, gLnk("R", "LOR1", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_group2"))
		insDoc(aux2, gLnk("R", "0849a", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_group3"))
		insDoc(aux2, gLnk("R", "0851a", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_group4"))
		insDoc(aux2, gLnk("R", "06GV1", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_group5"))
		insDoc(aux2, gLnk("R", "52002", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_group6"))
		insDoc(aux2, gLnk("R", "W0962", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_group7"))
		insDoc(aux2, gLnk("R", "P005B", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_group8"))
		insDoc(aux2, gLnk("R", "JI10", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_group9"))
		aux2 = insFld(aux1, gFld("Within-samples summary", ""))
		insDoc(aux2, gLnk("R", "Basic indices", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_comp_sum_Basic"))
		insDoc(aux2, gLnk("R", "Heterozygosity", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_comp_sum_het"))
		insDoc(aux2, gLnk("R", "Theta(H)", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_comp_sum_thetaH"))
		insDoc(aux2, gLnk("R", "No. of alleles", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_comp_sum_numAll"))
		insDoc(aux2, gLnk("R", "Allelic range", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_comp_sum_allRange"))
		insDoc(aux2, gLnk("R", "Garza-Williamson index", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_comp_sum_GW"))
		insDoc(aux2, gLnk("R", "Garza-Williamson modified index", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_comp_sum_GWN"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_pop_pairw_diff"))
		insDoc(aux2, gLnk("R", "Locus by locus AMOVA", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18pop_Loc_by_Loc_AMOVA"))
		insDoc(aux2, gLnk("R", "F-stat bootstraps", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_comp_sum_bootstrap"))
		insDoc(aux2, gLnk("R", "Exact tests", "BI10Site13loci_arlequin.htm#26_04_14at15_48_18_pop_exct_tests"))
