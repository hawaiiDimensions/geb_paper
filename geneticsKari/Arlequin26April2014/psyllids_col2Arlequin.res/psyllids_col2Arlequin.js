
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file:///C:/Program%20Files/Arlequin/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (psyllids_col2Arlequin.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 26/04/14 at 15:30:43", "psyllids_col2Arlequin.htm#26_04_14at15_30_43"))
	insDoc(aux1, gLnk("R", "Settings", "psyllids_col2Arlequin.htm#26_04_14at15_30_43_run_information"))
		aux2 = insFld(aux1, gFld("Shared haplotypes", "psyllids_col2Arlequin.htm#26_04_14at15_30_43_shared%20haplotypes"))
		insDoc(aux2, gLnk("R", "HI_col2_Kohala", "psyllids_col2Arlequin.htm#26_04_14at15_30_43_gr_shared0"))
		insDoc(aux2, gLnk("R", "HI_col2_MLoa", "psyllids_col2Arlequin.htm#26_04_14at15_30_43_gr_shared1"))
		insDoc(aux2, gLnk("R", "HI_col2_MKea", "psyllids_col2Arlequin.htm#26_04_14at15_30_43_gr_shared2"))
		aux2 = insFld(aux1, gFld("Samples", ""))
		insDoc(aux2, gLnk("R", "HI_col2_Kohala", "psyllids_col2Arlequin.htm#26_04_14at15_30_43_group0"))
		insDoc(aux2, gLnk("R", "HI_col2_MLoa", "psyllids_col2Arlequin.htm#26_04_14at15_30_43_group1"))
		insDoc(aux2, gLnk("R", "HI_col2_MKea", "psyllids_col2Arlequin.htm#26_04_14at15_30_43_group2"))
		aux2 = insFld(aux1, gFld("Within-samples summary", ""))
		insDoc(aux2, gLnk("R", "Basic indices", "psyllids_col2Arlequin.htm#26_04_14at15_30_43_comp_sum_Basic"))
		insDoc(aux2, gLnk("R", "Heterozygosity", "psyllids_col2Arlequin.htm#26_04_14at15_30_43_comp_sum_het"))
		insDoc(aux2, gLnk("R", "No. of alleles", "psyllids_col2Arlequin.htm#26_04_14at15_30_43_comp_sum_numAll"))
		insDoc(aux2, gLnk("R", "Molecular diversity", "psyllids_col2Arlequin.htm#26_04_14at15_30_43_comp_sum_moldiv"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "psyllids_col2Arlequin.htm#26_04_14at15_30_43_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "psyllids_col2Arlequin.htm#26_04_14at15_30_43_pop_pairw_diff"))
		insDoc(aux2, gLnk("R", "Exact tests", "psyllids_col2Arlequin.htm#26_04_14at15_30_43_pop_exct_tests"))
