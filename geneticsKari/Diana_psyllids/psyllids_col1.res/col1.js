
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file:///C:/Program%20Files/Arlequin/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (col1.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 29/04/14 at 12:13:29", "col1.htm#29_04_14at12_13_29"))
	insDoc(aux1, gLnk("R", "Settings", "col1.htm#29_04_14at12_13_29_run_information"))
		aux2 = insFld(aux1, gFld("Shared haplotypes", "col1.htm#29_04_14at12_13_29_shared%20haplotypes"))
		insDoc(aux2, gLnk("R", "COI_CytB", "col1.htm#29_04_14at12_13_29_gr_shared0"))
		insDoc(aux2, gLnk("R", "COIonly", "col1.htm#29_04_14at12_13_29_gr_shared1"))
		insDoc(aux2, gLnk("R", "CytBonly", "col1.htm#29_04_14at12_13_29_gr_shared2"))
		insDoc(aux2, gLnk("R", "Hawaii", "col1.htm#29_04_14at12_13_29_gr_shared3"))
		insDoc(aux2, gLnk("R", "HI_col_1", "col1.htm#29_04_14at12_13_29_gr_shared4"))
		insDoc(aux2, gLnk("R", "HI_col_2", "col1.htm#29_04_14at12_13_29_gr_shared5"))
		insDoc(aux2, gLnk("R", "HI_col_3", "col1.htm#29_04_14at12_13_29_gr_shared6"))
		insDoc(aux2, gLnk("R", "HI_col1_Kohala", "col1.htm#29_04_14at12_13_29_gr_shared7"))
		insDoc(aux2, gLnk("R", "HI_col2_Kohala", "col1.htm#29_04_14at12_13_29_gr_shared8"))
		insDoc(aux2, gLnk("R", "HI_col3_Kohala", "col1.htm#29_04_14at12_13_29_gr_shared9"))
		insDoc(aux2, gLnk("R", "HI_col1_MLoa", "col1.htm#29_04_14at12_13_29_gr_shared10"))
		insDoc(aux2, gLnk("R", "HI_col2_MLoa", "col1.htm#29_04_14at12_13_29_gr_shared11"))
		insDoc(aux2, gLnk("R", "HI_col3_MLoa", "col1.htm#29_04_14at12_13_29_gr_shared12"))
		insDoc(aux2, gLnk("R", "HI_col1_MKea", "col1.htm#29_04_14at12_13_29_gr_shared13"))
		insDoc(aux2, gLnk("R", "HI_col2_MKea", "col1.htm#29_04_14at12_13_29_gr_shared14"))
		insDoc(aux2, gLnk("R", "HI_col3_MKea", "col1.htm#29_04_14at12_13_29_gr_shared15"))
		insDoc(aux2, gLnk("R", "HI_col1_K_POUmi", "col1.htm#29_04_14at12_13_29_gr_shared16"))
		insDoc(aux2, gLnk("R", "HI_col2_K_POUmi", "col1.htm#29_04_14at12_13_29_gr_shared17"))
		insDoc(aux2, gLnk("R", "HI_col2_K_PLLae", "col1.htm#29_04_14at12_13_29_gr_shared18"))
		insDoc(aux2, gLnk("R", "HI_col2_K_Waim", "col1.htm#29_04_14at12_13_29_gr_shared19"))
		insDoc(aux2, gLnk("R", "HI_col3_K_POUmi", "col1.htm#29_04_14at12_13_29_gr_shared20"))
		insDoc(aux2, gLnk("R", "HI_col3_K_KFP", "col1.htm#29_04_14at12_13_29_gr_shared21"))
		insDoc(aux2, gLnk("R", "HI_col3_K_Waim", "col1.htm#29_04_14at12_13_29_gr_shared22"))
		insDoc(aux2, gLnk("R", "HI_col1_ML_TPRd", "col1.htm#29_04_14at12_13_29_gr_shared23"))
		insDoc(aux2, gLnk("R", "HI_col1_ML_Kau", "col1.htm#29_04_14at12_13_29_gr_shared24"))
		insDoc(aux2, gLnk("R", "HI_col1_ML_SCirRd", "col1.htm#29_04_14at12_13_29_gr_shared25"))
		insDoc(aux2, gLnk("R", "HI_col1_ML_Alili", "col1.htm#29_04_14at12_13_29_gr_shared26"))
		insDoc(aux2, gLnk("R", "HI_col1_ML_KIki", "col1.htm#29_04_14at12_13_29_gr_shared27"))
		insDoc(aux2, gLnk("R", "HI_col2_ML_SadRd", "col1.htm#29_04_14at12_13_29_gr_shared28"))
		insDoc(aux2, gLnk("R", "HI_col2_ML_Olaa", "col1.htm#29_04_14at12_13_29_gr_shared29"))
		insDoc(aux2, gLnk("R", "HI_col2_ML_Alili", "col1.htm#29_04_14at12_13_29_gr_shared30"))
		insDoc(aux2, gLnk("R", "HI_col2_ML_SCirRd", "col1.htm#29_04_14at12_13_29_gr_shared31"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_SCirRd", "col1.htm#29_04_14at12_13_29_gr_shared32"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_SadRd", "col1.htm#29_04_14at12_13_29_gr_shared33"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_Keauo", "col1.htm#29_04_14at12_13_29_gr_shared34"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_KIki", "col1.htm#29_04_14at12_13_29_gr_shared35"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_Puaulu", "col1.htm#29_04_14at12_13_29_gr_shared36"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_KMC", "col1.htm#29_04_14at12_13_29_gr_shared37"))
		insDoc(aux2, gLnk("R", "HI_col1_MK_Humu", "col1.htm#29_04_14at12_13_29_gr_shared38"))
		insDoc(aux2, gLnk("R", "HI_col2_MK_Humu", "col1.htm#29_04_14at12_13_29_gr_shared39"))
		insDoc(aux2, gLnk("R", "HI_col2_MK_Laupa", "col1.htm#29_04_14at12_13_29_gr_shared40"))
		insDoc(aux2, gLnk("R", "HI_col2_MK_HamCoast", "col1.htm#29_04_14at12_13_29_gr_shared41"))
		insDoc(aux2, gLnk("R", "HI_col3_MK_Humu", "col1.htm#29_04_14at12_13_29_gr_shared42"))
		insDoc(aux2, gLnk("R", "HA", "col1.htm#29_04_14at12_13_29_gr_shared43"))
		insDoc(aux2, gLnk("R", "HB", "col1.htm#29_04_14at12_13_29_gr_shared44"))
		insDoc(aux2, gLnk("R", "HC", "col1.htm#29_04_14at12_13_29_gr_shared45"))
		insDoc(aux2, gLnk("R", "spX", "col1.htm#29_04_14at12_13_29_gr_shared46"))
		insDoc(aux2, gLnk("R", "spXXa", "col1.htm#29_04_14at12_13_29_gr_shared47"))
		insDoc(aux2, gLnk("R", "spXXb", "col1.htm#29_04_14at12_13_29_gr_shared48"))
		insDoc(aux2, gLnk("R", "spXXc", "col1.htm#29_04_14at12_13_29_gr_shared49"))
		insDoc(aux2, gLnk("R", "dorA", "col1.htm#29_04_14at12_13_29_gr_shared50"))
		insDoc(aux2, gLnk("R", "dorB", "col1.htm#29_04_14at12_13_29_gr_shared51"))
		insDoc(aux2, gLnk("R", "min", "col1.htm#29_04_14at12_13_29_gr_shared52"))
		insDoc(aux2, gLnk("R", "Additional_Seqs", "col1.htm#29_04_14at12_13_29_gr_shared53"))
		aux2 = insFld(aux1, gFld("Samples", ""))
		insDoc(aux2, gLnk("R", "COI_CytB", "col1.htm#29_04_14at12_13_29_group0"))
		insDoc(aux2, gLnk("R", "COIonly", "col1.htm#29_04_14at12_13_29_group1"))
		insDoc(aux2, gLnk("R", "CytBonly", "col1.htm#29_04_14at12_13_29_group2"))
		insDoc(aux2, gLnk("R", "Hawaii", "col1.htm#29_04_14at12_13_29_group3"))
		insDoc(aux2, gLnk("R", "HI_col_1", "col1.htm#29_04_14at12_13_29_group4"))
		insDoc(aux2, gLnk("R", "HI_col_2", "col1.htm#29_04_14at12_13_29_group5"))
		insDoc(aux2, gLnk("R", "HI_col_3", "col1.htm#29_04_14at12_13_29_group6"))
		insDoc(aux2, gLnk("R", "HI_col1_Kohala", "col1.htm#29_04_14at12_13_29_group7"))
		insDoc(aux2, gLnk("R", "HI_col2_Kohala", "col1.htm#29_04_14at12_13_29_group8"))
		insDoc(aux2, gLnk("R", "HI_col3_Kohala", "col1.htm#29_04_14at12_13_29_group9"))
		insDoc(aux2, gLnk("R", "HI_col1_MLoa", "col1.htm#29_04_14at12_13_29_group10"))
		insDoc(aux2, gLnk("R", "HI_col2_MLoa", "col1.htm#29_04_14at12_13_29_group11"))
		insDoc(aux2, gLnk("R", "HI_col3_MLoa", "col1.htm#29_04_14at12_13_29_group12"))
		insDoc(aux2, gLnk("R", "HI_col1_MKea", "col1.htm#29_04_14at12_13_29_group13"))
		insDoc(aux2, gLnk("R", "HI_col2_MKea", "col1.htm#29_04_14at12_13_29_group14"))
		insDoc(aux2, gLnk("R", "HI_col3_MKea", "col1.htm#29_04_14at12_13_29_group15"))
		insDoc(aux2, gLnk("R", "HI_col1_K_POUmi", "col1.htm#29_04_14at12_13_29_group16"))
		insDoc(aux2, gLnk("R", "HI_col2_K_POUmi", "col1.htm#29_04_14at12_13_29_group17"))
		insDoc(aux2, gLnk("R", "HI_col2_K_PLLae", "col1.htm#29_04_14at12_13_29_group18"))
		insDoc(aux2, gLnk("R", "HI_col2_K_Waim", "col1.htm#29_04_14at12_13_29_group19"))
		insDoc(aux2, gLnk("R", "HI_col3_K_POUmi", "col1.htm#29_04_14at12_13_29_group20"))
		insDoc(aux2, gLnk("R", "HI_col3_K_KFP", "col1.htm#29_04_14at12_13_29_group21"))
		insDoc(aux2, gLnk("R", "HI_col3_K_Waim", "col1.htm#29_04_14at12_13_29_group22"))
		insDoc(aux2, gLnk("R", "HI_col1_ML_TPRd", "col1.htm#29_04_14at12_13_29_group23"))
		insDoc(aux2, gLnk("R", "HI_col1_ML_Kau", "col1.htm#29_04_14at12_13_29_group24"))
		insDoc(aux2, gLnk("R", "HI_col1_ML_SCirRd", "col1.htm#29_04_14at12_13_29_group25"))
		insDoc(aux2, gLnk("R", "HI_col1_ML_Alili", "col1.htm#29_04_14at12_13_29_group26"))
		insDoc(aux2, gLnk("R", "HI_col1_ML_KIki", "col1.htm#29_04_14at12_13_29_group27"))
		insDoc(aux2, gLnk("R", "HI_col2_ML_SadRd", "col1.htm#29_04_14at12_13_29_group28"))
		insDoc(aux2, gLnk("R", "HI_col2_ML_Olaa", "col1.htm#29_04_14at12_13_29_group29"))
		insDoc(aux2, gLnk("R", "HI_col2_ML_Alili", "col1.htm#29_04_14at12_13_29_group30"))
		insDoc(aux2, gLnk("R", "HI_col2_ML_SCirRd", "col1.htm#29_04_14at12_13_29_group31"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_SCirRd", "col1.htm#29_04_14at12_13_29_group32"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_SadRd", "col1.htm#29_04_14at12_13_29_group33"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_Keauo", "col1.htm#29_04_14at12_13_29_group34"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_KIki", "col1.htm#29_04_14at12_13_29_group35"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_Puaulu", "col1.htm#29_04_14at12_13_29_group36"))
		insDoc(aux2, gLnk("R", "HI_col3_ML_KMC", "col1.htm#29_04_14at12_13_29_group37"))
		insDoc(aux2, gLnk("R", "HI_col1_MK_Humu", "col1.htm#29_04_14at12_13_29_group38"))
		insDoc(aux2, gLnk("R", "HI_col2_MK_Humu", "col1.htm#29_04_14at12_13_29_group39"))
		insDoc(aux2, gLnk("R", "HI_col2_MK_Laupa", "col1.htm#29_04_14at12_13_29_group40"))
		insDoc(aux2, gLnk("R", "HI_col2_MK_HamCoast", "col1.htm#29_04_14at12_13_29_group41"))
		insDoc(aux2, gLnk("R", "HI_col3_MK_Humu", "col1.htm#29_04_14at12_13_29_group42"))
		insDoc(aux2, gLnk("R", "HA", "col1.htm#29_04_14at12_13_29_group43"))
		insDoc(aux2, gLnk("R", "HB", "col1.htm#29_04_14at12_13_29_group44"))
		insDoc(aux2, gLnk("R", "HC", "col1.htm#29_04_14at12_13_29_group45"))
		insDoc(aux2, gLnk("R", "spX", "col1.htm#29_04_14at12_13_29_group46"))
		insDoc(aux2, gLnk("R", "spXXa", "col1.htm#29_04_14at12_13_29_group47"))
		insDoc(aux2, gLnk("R", "spXXb", "col1.htm#29_04_14at12_13_29_group48"))
		insDoc(aux2, gLnk("R", "spXXc", "col1.htm#29_04_14at12_13_29_group49"))
		insDoc(aux2, gLnk("R", "dorA", "col1.htm#29_04_14at12_13_29_group50"))
		insDoc(aux2, gLnk("R", "dorB", "col1.htm#29_04_14at12_13_29_group51"))
		insDoc(aux2, gLnk("R", "min", "col1.htm#29_04_14at12_13_29_group52"))
		insDoc(aux2, gLnk("R", "Additional_Seqs", "col1.htm#29_04_14at12_13_29_group53"))
		aux2 = insFld(aux1, gFld("Within-samples summary", ""))
		insDoc(aux2, gLnk("R", "Basic indices", "col1.htm#29_04_14at12_13_29_comp_sum_Basic"))
		insDoc(aux2, gLnk("R", "Heterozygosity", "col1.htm#29_04_14at12_13_29_comp_sum_het"))
		insDoc(aux2, gLnk("R", "No. of alleles", "col1.htm#29_04_14at12_13_29_comp_sum_numAll"))
		insDoc(aux2, gLnk("R", "Molecular diversity", "col1.htm#29_04_14at12_13_29_comp_sum_moldiv"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "col1.htm#29_04_14at12_13_29_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "col1.htm#29_04_14at12_13_29_pop_amova"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "col1.htm#29_04_14at12_13_29_pop_pairw_diff"))
		insDoc(aux2, gLnk("R", "Exact tests", "col1.htm#29_04_14at12_13_29_pop_exct_tests"))
