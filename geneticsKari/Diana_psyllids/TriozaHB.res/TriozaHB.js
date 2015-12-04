
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file:///C:/Program%20Files/Arlequin/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (TriozaHB.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 15/05/14 at 12:33:44", "TriozaHB.htm#15_05_14at12_33_44"))
	insDoc(aux1, gLnk("R", "Settings", "TriozaHB.htm#15_05_14at12_33_44_run_information"))
		aux2 = insFld(aux1, gFld("Shared haplotypes", "TriozaHB.htm#15_05_14at12_33_44_shared%20haplotypes"))
		insDoc(aux2, gLnk("R", "HI_col2_K_POUmi", "TriozaHB.htm#15_05_14at12_33_44_gr_shared0"))
		insDoc(aux2, gLnk("R", "HI_col2_K_PLLae", "TriozaHB.htm#15_05_14at12_33_44_gr_shared1"))
		insDoc(aux2, gLnk("R", "HI_col2_K_Waim", "TriozaHB.htm#15_05_14at12_33_44_gr_shared2"))
		insDoc(aux2, gLnk("R", "HI_col2_ML_SadRd", "TriozaHB.htm#15_05_14at12_33_44_gr_shared3"))
		insDoc(aux2, gLnk("R", "HI_col2_ML_Olaa", "TriozaHB.htm#15_05_14at12_33_44_gr_shared4"))
		insDoc(aux2, gLnk("R", "HI_col2_ML_Alili", "TriozaHB.htm#15_05_14at12_33_44_gr_shared5"))
		insDoc(aux2, gLnk("R", "HI_col2_ML_SCirRd", "TriozaHB.htm#15_05_14at12_33_44_gr_shared6"))
		insDoc(aux2, gLnk("R", "HI_col2_MK_Humu", "TriozaHB.htm#15_05_14at12_33_44_gr_shared7"))
		insDoc(aux2, gLnk("R", "HI_col2_MK_Laupa", "TriozaHB.htm#15_05_14at12_33_44_gr_shared8"))
		insDoc(aux2, gLnk("R", "HI_col2_MK_HamCoast", "TriozaHB.htm#15_05_14at12_33_44_gr_shared9"))
		aux2 = insFld(aux1, gFld("Samples", ""))
		insDoc(aux2, gLnk("R", "HI_col2_K_POUmi", "TriozaHB.htm#15_05_14at12_33_44_group0"))
		insDoc(aux2, gLnk("R", "HI_col2_K_PLLae", "TriozaHB.htm#15_05_14at12_33_44_group1"))
		insDoc(aux2, gLnk("R", "HI_col2_K_Waim", "TriozaHB.htm#15_05_14at12_33_44_group2"))
		insDoc(aux2, gLnk("R", "HI_col2_ML_SadRd", "TriozaHB.htm#15_05_14at12_33_44_group3"))
		insDoc(aux2, gLnk("R", "HI_col2_ML_Olaa", "TriozaHB.htm#15_05_14at12_33_44_group4"))
		insDoc(aux2, gLnk("R", "HI_col2_ML_Alili", "TriozaHB.htm#15_05_14at12_33_44_group5"))
		insDoc(aux2, gLnk("R", "HI_col2_ML_SCirRd", "TriozaHB.htm#15_05_14at12_33_44_group6"))
		insDoc(aux2, gLnk("R", "HI_col2_MK_Humu", "TriozaHB.htm#15_05_14at12_33_44_group7"))
		insDoc(aux2, gLnk("R", "HI_col2_MK_Laupa", "TriozaHB.htm#15_05_14at12_33_44_group8"))
		insDoc(aux2, gLnk("R", "HI_col2_MK_HamCoast", "TriozaHB.htm#15_05_14at12_33_44_group9"))
		aux2 = insFld(aux1, gFld("Within-samples summary", ""))
		insDoc(aux2, gLnk("R", "Basic indices", "TriozaHB.htm#15_05_14at12_33_44_comp_sum_Basic"))
		insDoc(aux2, gLnk("R", "Heterozygosity", "TriozaHB.htm#15_05_14at12_33_44_comp_sum_het"))
		insDoc(aux2, gLnk("R", "No. of alleles", "TriozaHB.htm#15_05_14at12_33_44_comp_sum_numAll"))
		insDoc(aux2, gLnk("R", "Molecular diversity", "TriozaHB.htm#15_05_14at12_33_44_comp_sum_moldiv"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "TriozaHB.htm#15_05_14at12_33_44_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "TriozaHB.htm#15_05_14at12_33_44_pop_amova"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "TriozaHB.htm#15_05_14at12_33_44_pop_pairw_diff"))
		insDoc(aux2, gLnk("R", "Exact tests", "TriozaHB.htm#15_05_14at12_33_44_pop_exct_tests"))
