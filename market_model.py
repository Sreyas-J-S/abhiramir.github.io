from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.datasets import make_classification
import pandas as pd

# Generate sample market data (replace this block with pd.read_csv('market_data.csv') when you have real data)
X_raw, y_raw = make_classification(
    n_samples=1000,
    n_features=10,
    n_informative=5,
    n_classes=2,
    random_state=42
)
feature_cols = [f'feature_{i}' for i in range(10)]
df = pd.DataFrame(X_raw, columns=feature_cols)
df['target'] = y_raw

# Prepare features and target
X = df.drop(columns=['target'])
y = df['target']

# Split into train/test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

print(f'Accuracy: {model.score(X_test, y_test):.2%}')

