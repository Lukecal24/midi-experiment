console.log("hello");

// First, we need to create a MIDIFile object
var midiFile = new MIDIFile();

// Next, we can set some properties of the MIDI file, such as the tempo
midiFile.setTempo(134);

// Then, we can add some tracks to the MIDI file
var track1 = midiFile.addTrack();
var track2 = midiFile.addTrack();

// Now we can add some events to the tracks.
// For example, we can add a note on event to track 1
track1.addEvent(new MIDIMessage.noteOn(0, 'C3', 127, 0));

// We can also add a note off event to track 1
track1.addEvent(new MIDIMessage.noteOff(0, 'C3', 127, 96));

// And we can add a program change event to track 2
track2.addEvent(new MIDIMessage.programChange(0, 1, 0));

// Once we have added all the events we want to the tracks, we can generate the MIDI file data
var fileData = midiFile.toBytes();

// Finally, we can use the file data to create a MIDI file and download it
var blob = new Blob([fileData], {type: 'audio/midi'});
var a = document.createElement('a');
a.href = URL.createObjectURL(blob);
a.download = 'myMidiFile.mid';
a.click();
