
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file:///C:/Users/General%20Lab/Desktop/WinArl35/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (psyllids_col3Arlequin.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 26/04/14 at 15:34:51", "psyllids_col3Arlequin.htm#26_04_14at15_34_51"))
	insDoc(aux1, gLnk("R", "Settings", "psyllids_col3Arlequin.htm#26_04_14at15_34_51_run_information"))
		aux2 = insFld(aux1, gFld("Shared haplotypes", "psyllids_col3Arlequin.htm#26_04_14at15_34_51_shared%20haplotypes"))
		insDoc(aux2, gLnk("R", "COI_CytB", "psyllids_col3Arlequin.htm#26_04_14at15_34_51_gr_shared0"))
		insDoc(aux2, gLnk("R", "COIonly", "psyllids_col3Arlequin.htm#26_04_14at15_34_51_gr_shared1"))
		insDoc(aux2, gLnk("R", "Hawaii", "psyllids_col3Arlequin.htm#26_04_14at15_34_51_gr_shared2"))
		insDoc(aux2, gLnk("R", "HI_col3", "psyllids_col3Arlequin.htm#26_04_14at15_34_51_gr_shared3"))
		insDoc(aux2, gLnk("R", "HI_col3_Kohala", "psyllids_col3Arlequin.htm#26_04_14at15_34_51_gr_shared4"))
		insDoc(aux2, gLnk("R", "HI_col3_MLoa", "psyllids_col3Arlequin.htm#26_04_14at15_34_51_gr_shared5"))
		insDoc(aux2, gLnk("R", "HI_col3_MKea", "psyllids_col3Arlequin.htm#26_04_14at15_34_51_gr_shared6"))
		aux2 = insFld(aux1, gFld("Samples", ""))
		insDoc(aux2, gLnk("R", "COI_CytB", "psyllids_col3Arlequin.htm#26_04_14at15_34_51_group0"))
		insDoc(aux2, gLnk("R", "COIonly", "psyllids_col3Arlequin.htm#26_04_14at15_34_51_group1"))
		insDoc(aux2, gLnk("R", "Hawaii", "psyllids_col3Arlequin.htm#26_04_14at15_34_51_group2"))
		insDoc(aux2, gLnk("R", "HI_col3", "psyllids_col3Arlequin.htm#26_04_14at15_34_51_group3"))
		insDoc(aux2, gLnk("R", "HI_col3_Kohala", "psyllids_col3Arlequin.htm#26_04_14at15_34_51_group4"))
		insDoc(aux2, gLnk("R", "HI_col3_MLoa", "psyllids_col3Arlequin.htm#26_04_14at15_34_51_group5"))
		insDoc(aux2, gLnk("R", "HI_col3_MKea", "psyllids_col3Arlequin.htm#26_04_14at15_34_51_group6"))
		aux2 = insFld(aux1, gFld("Within-samples summary", ""))
		insDoc(aux2, gLnk("R", "Basic indices", "psyllids_col3Arlequin.htm#26_04_14at15_34_51_comp_sum_Basic"))
		insDoc(aux2, gLnk("R", "Heterozygosity", "psyllids_col3Arlequin.htm#26_04_14at15_34_51_comp_sum_het"))
