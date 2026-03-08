from sklearn.ensemble import RandomForestClassifier
import pandas as pd

# Load data
df = pd.read_csv('market_data.csv')

# Prepare features and target
# Update these column names based on your actual CSV structure
X = df.drop(columns=['target'])   # feature columns
y = df['target']                  # target column

# Split into train/test sets
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

print(f'Accuracy: {model.score(X_test, y_test):.2%}')
