
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file:///C:/Program%20Files/Arlequin/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (Nchambersi_seqData.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 26/04/14 at 15:25:18", "Nchambersi_seqData.htm#26_04_14at15_25_18"))
	insDoc(aux1, gLnk("R", "Settings", "Nchambersi_seqData.htm#26_04_14at15_25_18_run_information"))
		aux2 = insFld(aux1, gFld("Shared haplotypes", "Nchambersi_seqData.htm#26_04_14at15_25_18_shared%20haplotypes"))
		insDoc(aux2, gLnk("R", "MLT_H", "Nchambersi_seqData.htm#26_04_14at15_25_18_gr_shared0"))
		insDoc(aux2, gLnk("R", "MLT_L", "Nchambersi_seqData.htm#26_04_14at15_25_18_gr_shared1"))
		insDoc(aux2, gLnk("R", "MLOR_H", "Nchambersi_seqData.htm#26_04_14at15_25_18_gr_shared2"))
		insDoc(aux2, gLnk("R", "MLOR_M", "Nchambersi_seqData.htm#26_04_14at15_25_18_gr_shared3"))
		insDoc(aux2, gLnk("R", "MLOR_L", "Nchambersi_seqData.htm#26_04_14at15_25_18_gr_shared4"))
		insDoc(aux2, gLnk("R", "SR66", "Nchambersi_seqData.htm#26_04_14at15_25_18_gr_shared5"))
		insDoc(aux2, gLnk("R", "SR52", "Nchambersi_seqData.htm#26_04_14at15_25_18_gr_shared6"))
		insDoc(aux2, gLnk("R", "MK_WG", "Nchambersi_seqData.htm#26_04_14at15_25_18_gr_shared7"))
		insDoc(aux2, gLnk("R", "MK_PK", "Nchambersi_seqData.htm#26_04_14at15_25_18_gr_shared8"))
		insDoc(aux2, gLnk("R", "MK_Back", "Nchambersi_seqData.htm#26_04_14at15_25_18_gr_shared9"))
		aux2 = insFld(aux1, gFld("Samples", ""))
		insDoc(aux2, gLnk("R", "MLT_H", "Nchambersi_seqData.htm#26_04_14at15_25_18_group0"))
		insDoc(aux2, gLnk("R", "MLT_L", "Nchambersi_seqData.htm#26_04_14at15_25_18_group1"))
		insDoc(aux2, gLnk("R", "MLOR_H", "Nchambersi_seqData.htm#26_04_14at15_25_18_group2"))
		insDoc(aux2, gLnk("R", "MLOR_M", "Nchambersi_seqData.htm#26_04_14at15_25_18_group3"))
		insDoc(aux2, gLnk("R", "MLOR_L", "Nchambersi_seqData.htm#26_04_14at15_25_18_group4"))
		insDoc(aux2, gLnk("R", "SR66", "Nchambersi_seqData.htm#26_04_14at15_25_18_group5"))
		insDoc(aux2, gLnk("R", "SR52", "Nchambersi_seqData.htm#26_04_14at15_25_18_group6"))
		insDoc(aux2, gLnk("R", "MK_WG", "Nchambersi_seqData.htm#26_04_14at15_25_18_group7"))
		insDoc(aux2, gLnk("R", "MK_PK", "Nchambersi_seqData.htm#26_04_14at15_25_18_group8"))
		insDoc(aux2, gLnk("R", "MK_Back", "Nchambersi_seqData.htm#26_04_14at15_25_18_group9"))
		aux2 = insFld(aux1, gFld("Within-samples summary", ""))
		insDoc(aux2, gLnk("R", "Basic indices", "Nchambersi_seqData.htm#26_04_14at15_25_18_comp_sum_Basic"))
		insDoc(aux2, gLnk("R", "Heterozygosity", "Nchambersi_seqData.htm#26_04_14at15_25_18_comp_sum_het"))
		insDoc(aux2, gLnk("R", "No. of alleles", "Nchambersi_seqData.htm#26_04_14at15_25_18_comp_sum_numAll"))
		insDoc(aux2, gLnk("R", "Molecular diversity", "Nchambersi_seqData.htm#26_04_14at15_25_18_comp_sum_moldiv"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "Nchambersi_seqData.htm#26_04_14at15_25_18_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "Nchambersi_seqData.htm#26_04_14at15_25_18_pop_amova"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "Nchambersi_seqData.htm#26_04_14at15_25_18_pop_pairw_diff"))
		insDoc(aux2, gLnk("R", "Exact tests", "Nchambersi_seqData.htm#26_04_14at15_25_18_pop_exct_tests"))
