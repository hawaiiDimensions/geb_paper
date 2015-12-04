
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file://///psf/Shared%20PC%20folder/WinArl35/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (Brevignatha_allo_arlequin.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 28/05/14 at 07:35:41", "Brevignatha_allo_arlequin.htm#28_05_14at07_35_41"))
	insDoc(aux1, gLnk("R", "Settings", "Brevignatha_allo_arlequin.htm#28_05_14at07_35_41_run_information"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "Brevignatha_allo_arlequin.htm#28_05_14at07_35_41_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "Brevignatha_allo_arlequin.htm#28_05_14at07_35_41_pop_amova"))
