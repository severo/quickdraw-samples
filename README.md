# quickdraw-samples

100 random draws per country and per category

## Spoon

First download the [raw data of the spoon drawings](https://storage.cloud.google.com/quickdraw_dataset/full/raw/spoon.ndjson). Note that it requires a Google account.

Then launch

```js
npm run extract path/to/full_raw_spoon.ndjson path/to/spoon.ndjson
```

It extract 100 random drawings for 10 countries (JP, EG, US, RU, FR, DE, BR, MX, VN, HK) and place them in `path/to/spoon.ndjson`. The format is https://github.com/googlecreativelab/quickdraw-dataset#the-raw-moderated-dataset.

---

### Credits

_Developed for the [LIRIS M2i project](https://projet.liris.cnrs.fr/mi2/) by Sylvain Lesage._
