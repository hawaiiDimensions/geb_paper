
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file://///psf/Shared%20PC%20folder/WinArl35/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (Anuenue_CO1_arlequin_withinHI.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 28/05/14 at 07:31:00", "Anuenue_CO1_arlequin_withinHI.htm#28_05_14at07_31_00"))
	insDoc(aux1, gLnk("R", "Settings", "Anuenue_CO1_arlequin_withinHI.htm#28_05_14at07_31_00_run_information"))
		aux2 = insFld(aux1, gFld("Shared haplotypes", "Anuenue_CO1_arlequin_withinHI.htm#28_05_14at07_31_00_shared%20haplotypes"))
		insDoc(aux2, gLnk("R", "KIPUKAS", "Anuenue_CO1_arlequin_withinHI.htm#28_05_14at07_31_00_gr_shared0"))
		insDoc(aux2, gLnk("R", "PUUMAKAALA", "Anuenue_CO1_arlequin_withinHI.htm#28_05_14at07_31_00_gr_shared1"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "Anuenue_CO1_arlequin_withinHI.htm#28_05_14at07_31_00_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "Anuenue_CO1_arlequin_withinHI.htm#28_05_14at07_31_00_pop_amova"))
