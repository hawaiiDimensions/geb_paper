
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file://///psf/Shared%20PC%20folder/WinArl35/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (Brevignatha_CO1_arlequin_Kipukas.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 28/05/14 at 07:37:02", "Brevignatha_CO1_arlequin_Kipukas.htm#28_05_14at07_37_02"))
	insDoc(aux1, gLnk("R", "Settings", "Brevignatha_CO1_arlequin_Kipukas.htm#28_05_14at07_37_02_run_information"))
		aux2 = insFld(aux1, gFld("Shared haplotypes", "Brevignatha_CO1_arlequin_Kipukas.htm#28_05_14at07_37_02_shared%20haplotypes"))
		insDoc(aux2, gLnk("R", "KIPUKA1", "Brevignatha_CO1_arlequin_Kipukas.htm#28_05_14at07_37_02_gr_shared0"))
		insDoc(aux2, gLnk("R", "KIPUKA2", "Brevignatha_CO1_arlequin_Kipukas.htm#28_05_14at07_37_02_gr_shared1"))
		insDoc(aux2, gLnk("R", "KIPUKA3", "Brevignatha_CO1_arlequin_Kipukas.htm#28_05_14at07_37_02_gr_shared2"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "Brevignatha_CO1_arlequin_Kipukas.htm#28_05_14at07_37_02_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "Brevignatha_CO1_arlequin_Kipukas.htm#28_05_14at07_37_02_pop_amova"))