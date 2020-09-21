# quickdraw-samples

Extract 100 random [Quick Draw Dataset](https://github.com/googlecreativelab/quickdraw-dataset) drawings for 10 countries.

## Extract

First download [raw data](https://console.cloud.google.com/storage/browser/quickdraw_dataset/full/raw) for a given word, for example [full_raw_spoon.ndjson](https://storage.cloud.google.com/quickdraw_dataset/full/raw/spoon.ndjson). Note that it requires a Google account.

Then launch

```bash
npm run extract full_raw_spoon.ndjson spoon.ndjson
```

It extract 100 random drawings for each of 10 countries (JP, EG, US, RU, FR, DE, BR, MX, VN, HK) and place them in `path/to/spoon.ndjson`. The format is https://github.com/googlecreativelab/quickdraw-dataset#the-raw-moderated-dataset.

## Credits

_Developed for the [LIRIS M2i project](https://projet.liris.cnrs.fr/mi2/) by Sylvain Lesage._
