
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file:///C:/Program%20Files/Arlequin/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (col3HC.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 13/05/14 at 14:24:19", "col3HC.htm#13_05_14at14_24_19"))
	aux1 = insFld(foldersTree, gFld("Run of 13/05/14 at 14:24:28", "col3HC.htm#13_05_14at14_24_28"))
	aux1 = insFld(foldersTree, gFld("Run of 13/05/14 at 14:25:31", "col3HC.htm#13_05_14at14_25_31"))
	aux1 = insFld(foldersTree, gFld("Run of 13/05/14 at 14:26:46", "col3HC.htm#13_05_14at14_26_46"))
	aux1 = insFld(foldersTree, gFld("Run of 13/05/14 at 14:27:13", "col3HC.htm#13_05_14at14_27_13"))
	aux1 = insFld(foldersTree, gFld("Run of 13/05/14 at 14:27:20", "col3HC.htm#13_05_14at14_27_20"))
	aux1 = insFld(foldersTree, gFld("Run of 13/05/14 at 14:28:40", "col3HC.htm#13_05_14at14_28_40"))
	aux1 = insFld(foldersTree, gFld("Run of 13/05/14 at 14:28:47", "col3HC.htm#13_05_14at14_28_47"))
	aux1 = insFld(foldersTree, gFld("Run of 13/05/14 at 14:29:43", "col3HC.htm#13_05_14at14_29_43"))
	insDoc(aux1, gLnk("R", "Settings", "col3HC.htm#13_05_14at14_29_43_run_information"))
		aux2 = insFld(aux1, gFld("Shared haplotypes", "col3HC.htm#13_05_14at14_29_43_shared%20haplotypes"))
		insDoc(aux2, gLnk("R", "HI_col3_K_KFP", "col3HC.htm#13_05_14at14_29_43_gr_shared0"))
		insDoc(aux2, gLnk("R", "HI_col3_K_Waim", "col3HC.htm#13_05_14at14_29_43_gr_shared1"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_SCirRd", "col3HC.htm#13_05_14at14_29_43_gr_shared2"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_Keauo", "col3HC.htm#13_05_14at14_29_43_gr_shared3"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_KIki", "col3HC.htm#13_05_14at14_29_43_gr_shared4"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_Puaulu", "col3HC.htm#13_05_14at14_29_43_gr_shared5"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_KMC", "col3HC.htm#13_05_14at14_29_43_gr_shared6"))
		insDoc(aux2, gLnk("R", "HI_col3_MK_Humu", "col3HC.htm#13_05_14at14_29_43_gr_shared7"))
		aux2 = insFld(aux1, gFld("Samples", ""))
		insDoc(aux2, gLnk("R", "HI_col3_K_KFP", "col3HC.htm#13_05_14at14_29_43_group0"))
		insDoc(aux2, gLnk("R", "HI_col3_K_Waim", "col3HC.htm#13_05_14at14_29_43_group1"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_SCirRd", "col3HC.htm#13_05_14at14_29_43_group2"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_Keauo", "col3HC.htm#13_05_14at14_29_43_group3"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_KIki", "col3HC.htm#13_05_14at14_29_43_group4"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_Puaulu", "col3HC.htm#13_05_14at14_29_43_group5"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_KMC", "col3HC.htm#13_05_14at14_29_43_group6"))
		insDoc(aux2, gLnk("R", "HI_col3_MK_Humu", "col3HC.htm#13_05_14at14_29_43_group7"))
		aux2 = insFld(aux1, gFld("Within-samples summary", ""))
		insDoc(aux2, gLnk("R", "Basic indices", "col3HC.htm#13_05_14at14_29_43_comp_sum_Basic"))
		insDoc(aux2, gLnk("R", "Heterozygosity", "col3HC.htm#13_05_14at14_29_43_comp_sum_het"))
		insDoc(aux2, gLnk("R", "No. of alleles", "col3HC.htm#13_05_14at14_29_43_comp_sum_numAll"))
		insDoc(aux2, gLnk("R", "Molecular diversity", "col3HC.htm#13_05_14at14_29_43_comp_sum_moldiv"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "col3HC.htm#13_05_14at14_29_43_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "col3HC.htm#13_05_14at14_29_43_pop_amova"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "col3HC.htm#13_05_14at14_29_43_pop_pairw_diff"))
		insDoc(aux2, gLnk("R", "Exact tests", "col3HC.htm#13_05_14at14_29_43_pop_exct_tests"))