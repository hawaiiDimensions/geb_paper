
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file:///C:/Program%20Files/Arlequin/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (N_raillardiae_BigIslandCO1.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 26/04/14 at 15:24:15", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15"))
	insDoc(aux1, gLnk("R", "Settings", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_run_information"))
		aux2 = insFld(aux1, gFld("Shared haplotypes", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_shared%20haplotypes"))
		insDoc(aux2, gLnk("R", "MK_BACK", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_gr_shared0"))
		insDoc(aux2, gLnk("R", "MK_PuuLaau", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_gr_shared1"))
		insDoc(aux2, gLnk("R", "ML_Maunuka", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_gr_shared2"))
		insDoc(aux2, gLnk("R", "ML_HIVOByronLedge", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_gr_shared3"))
		insDoc(aux2, gLnk("R", "ML_HIVONaupo", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_gr_shared4"))
		insDoc(aux2, gLnk("R", "ML_HIVOHilinaPali", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_gr_shared5"))
		aux2 = insFld(aux1, gFld("Samples", ""))
		insDoc(aux2, gLnk("R", "MK_BACK", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_group0"))
		insDoc(aux2, gLnk("R", "MK_PuuLaau", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_group1"))
		insDoc(aux2, gLnk("R", "ML_Maunuka", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_group2"))
		insDoc(aux2, gLnk("R", "ML_HIVOByronLedge", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_group3"))
		insDoc(aux2, gLnk("R", "ML_HIVONaupo", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_group4"))
		insDoc(aux2, gLnk("R", "ML_HIVOHilinaPali", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_group5"))
		aux2 = insFld(aux1, gFld("Within-samples summary", ""))
		insDoc(aux2, gLnk("R", "Basic indices", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_comp_sum_Basic"))
		insDoc(aux2, gLnk("R", "Heterozygosity", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_comp_sum_het"))
		insDoc(aux2, gLnk("R", "Theta(H)", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_comp_sum_thetaH"))
		insDoc(aux2, gLnk("R", "No. of alleles", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_comp_sum_numAll"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_pop_amova"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_pop_pairw_diff"))
		insDoc(aux2, gLnk("R", "Exact tests", "N_raillardiae_BigIslandCO1.htm#26_04_14at15_24_15_pop_exct_tests"))
