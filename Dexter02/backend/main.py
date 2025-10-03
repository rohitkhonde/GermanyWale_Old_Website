import pandas as pd
import re
import glob
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# --- University Data Mapping ---
# This new, expanded map uses your file as a reference to standardize names
# and provide high-quality, direct image URLs for many universities.
UNIVERSITY_MAPPING = {
    # Key: A common identifier string. Value: Dict with canonical name and direct image URL.
    "FAU Erlangen-Nuremberg": {
        "canonical_name": "Friedrich-Alexander-Universität Erlangen-Nürnberg",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/FAU_Erlangen-N%C3%BCrnberg_logo.svg/1024px-FAU_Erlangen-N%C3%BCrnberg_logo.svg.png"
    },
    "Anhalt University of Applied Sciences": {
        "canonical_name": "Anhalt University of Applied Sciences",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Logo_Hochschule_Anhalt.svg/1024px-Logo_Hochschule_Anhalt.svg.png"
    },
    "RWTH Aachen": {
        "canonical_name": "RWTH Aachen University",
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.BiqqC723QtfBP_Kf1gYWTwHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    "Technical University of Munich": {
        "canonical_name": "Technical University of Munich (TUM)",
        "image_url": "https://www.wur.nl/upload_mm/f/6/3/6244f144-e799-4122-9ea5-6cf251ab69c4_TUM%20internet%20picture%201_8e811d4e_750x400.jpg"
    },
    "Heidelberg University": {
        "canonical_name": "Heidelberg University",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Siegel_der_Universit%C3%A4t_Heidelberg.svg/1024px-Siegel_der_Universit%C3%A4t_Heidelberg.svg.png"
    },
    "Humboldt University of Berlin": {
        "canonical_name": "Humboldt University of Berlin",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Siegel_der_Humboldt-Universit%C3%A4t_zu_Berlin.svg/1024px-Siegel_der_Humboldt-Universit%C3%A4t_zu_Berlin.svg.png"
    },
    "Free University of Berlin": {
        "canonical_name": "Free University of Berlin (FU Berlin)",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Freie_Universitaet_Berlin_logo.svg/1024px-Freie_Universitaet_Berlin_logo.svg.png"
    },
    "Karlsruhe Institute of Technology": {
        "canonical_name": "Karlsruhe Institute of Technology (KIT)",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/KIT-Logo.svg/1024px-KIT-Logo.svg.png"
    },
    "University of Freiburg": {
        "canonical_name": "University of Freiburg",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Siegel_der_Albert-Ludwigs-Universit%C3%A4t_Freiburg.svg/1024px-Siegel_der_Albert-Ludwigs-Universit%C3%A4t_Freiburg.svg.png"
    },
    "Hamburg University of Technology": {
        "canonical_name": "Hamburg University of Technology (TUHH)",
        "image_url": "https://i.ytimg.com/vi/oUFH8UpKvVo/maxresdefault.jpg"
    },
    "University of Hamburg": {
        "canonical_name": "University of Hamburg",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Universit%C3%A4t_Hamburg_logo.svg/1024px-Universit%C3%A4t_Hamburg_logo.svg.png"
    },
    "Goethe University Frankfurt": {
        "canonical_name": "Goethe University Frankfurt",
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.iwGclszcsRW1F6cn1VtGPgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    "University of Stuttgart": {
        "canonical_name": "University of Stuttgart",
        "image_url": "https://c8.alamy.com/comp/2P7AHXD/university-exterior-view-stuttgart-baden-wuerttemberg-germany-2P7AHXD.jpg"
    },
    "Technical University Dresden": {
        "canonical_name": "Technical University Dresden (TU Dresden)",
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.aCPXWNQAhs8w2Mqs3krIpAHaDk?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    "University of Cologne": {
        "canonical_name": "University of Cologne",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Siegel_der_Universit%C3%A4t_zu_K%C3%B6ln.svg/1024px-Siegel_der_Universit%C3%A4t_zu_K%C3%B6ln.svg.png"
    },
    "University of Bonn": {
        "canonical_name": "University of Bonn",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Siegel_der_Rheinischen_Friedrich-Wilhelms-Universit%C3%A4t_Bonn.svg/1024px-Siegel_der_Rheinischen_Friedrich-Wilhelms-Universit%C3%A4t_Bonn.svg.png"
    },
    "University of Göttingen": {
        "canonical_name": "University of Göttingen",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Siegel_der_Georg-August-Universit%C3%A4t_G%C3%B6ttingen.svg/1024px-Siegel_der_Georg-August-Universit%C3%A4t_G%C3%B6ttingen.svg.png"
    },
     "Bauhaus University Weimar": {
        "canonical_name": "Bauhaus University Weimar",
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.yRznI-ab269zfa0bTNcrRgHaDd?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    "TU Berlin": {
        "canonical_name": "Technical University Berlin (TU Berlin)",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/TU-Berlin-Logo.svg/1024px-TU-Berlin-Logo.svg.png"
    },
    "University of Mannheim": {
        "canonical_name": "University of Mannheim",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Universit%C3%A4t_Mannheim_logo.svg/1024px-Universit%C3%A4t_Mannheim_logo.svg.png"
    },
    "Ulm University": {
        "canonical_name": "Ulm University",
        "image_url": "https://upload.wikimedia.org/wikipedia/de/thumb/a/a2/Logo_Uni_Ulm.svg/1024px-Logo_Uni_Ulm.svg.png"
    },
    "Berlin School of Business and Innovation": {
        "canonical_name": "Berlin School of Business and Innovation (BSBI)",
        "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Berlin_School_of_Business_and_Innovation_logo.svg/1200px-Berlin_School_of_Business_and_Innovation_logo.svg.png"
    },
    "GISMA Business School": {
        "canonical_name": "GISMA Business School",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GISMA_Business_School_logo_2022.svg/2560px-GISMA_Business_School_logo_2022.svg.png"
    },
    "SRH Berlin": {
        "canonical_name": "SRH Berlin University of Applied Sciences",
        "image_url": "https://www.srh-university.de/fileadmin/_processed_/6/2/csm_Berlin_Campus_am_Fluss_6304454d0e.jpg"
    },
    "Arden University": {
        "canonical_name": "Arden University Berlin",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Arden_University_logo.svg/2560px-Arden_University_logo.svg.png"
    },
    "University of Europe for Applied Sciences": {
        "canonical_name": "University of Europe for Applied Sciences",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/University_of_Europe_for_Applied_Sciences_logo.svg/2560px-University_of_Europe_for_Applied_Sciences_logo.svg.png"
    },
    "IU International University": {
        "canonical_name": "IU International University of Applied Sciences",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/IU_Internationale_Hochschule_logo.svg/1200px-IU_Internationale_Hochschule_logo.svg.png"
    },
    "Lancaster University": {
        "canonical_name": "Lancaster University Leipzig",
        "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Lancaster_University_logo.svg/1200px-Lancaster_University_logo.svg.png"
    },
    "ESMT Berlin": {
        "canonical_name": "ESMT Berlin",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/ESMT_Berlin_Logo_2021.svg/2560px-ESMT_Berlin_Logo_2021.svg.png"
    },
    "Cologne Business School": {
        "canonical_name": "Cologne Business School (CBS)",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/CBS_Cologne_Business_School_Logo_2021.svg/2560px-CBS_Cologne_Business_School_Logo_2021.svg.png"
    },
    "Munich Business School": {
        "canonical_name": "Munich Business School",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Munich_Business_School_logo.svg/2560px-Munich_Business_School_logo.svg.png"
    },
    "ESB Business School": {
        "canonical_name": "ESB Business School, Reutlingen University",
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.QpgRr5q4KAvuaG-LTt52BwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    "Reutlingen University": {
        "canonical_name": "Reutlingen University",
        "image_url": "https://th.bing.com/th/id/OIP.zfFJQ2qaAZ5Qzn0VDUH2PwHaEK?w=379&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    "TU Bergakademie Freiberg": {
        "canonical_name": "TU Bergakademie Freiberg",
        "image_url": "https://th.bing.com/th/id/OIP.xdxNyVgOi3rKYhcATe_QOwHaEl?w=225&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    "Kaiserslautern University of Applied Sciences": {
        "canonical_name": "Kaiserslautern University of Applied Sciences",
        "image_url": "https://images.shiksha.com/mediadata/images/1638862445phpj9ttfw_g.jpg"
    },
    "Technische Hochschule Lübeck": {
        "canonical_name": "Technische Hochschule Lübeck",
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.dXkJQJHtqqkBD0A9Ji-mYAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    "Rhine-Waal University of Applied Sciences": {
        "canonical_name": "Rhine-Waal University of Applied Sciences",
        "image_url": "https://erudera.com/media/images/Rhine-Waal_University_of_Applied_Sciences_cover.original.jpg"
    },
    "Esslingen University of Applied Sciences": {
        "canonical_name": "Esslingen University of Applied Sciences",
        "image_url": "https://www.wwepsmeeting.udl.cat/export/sites/Wwepsmeeting/en/.galleries/14-1.jpg"
    },
    "Schmalkalden University of Applied Sciences": {
        "canonical_name": "Schmalkalden University of Applied Sciences",
        "image_url": "https://th.bing.com/th/id/R.932c0ece1e5ea5d6006eaf149c8d6067?rik=qYMP2Hro464HmA&riu=http%3a%2f%2fphotos.wikimapia.org%2fp%2f00%2f00%2f24%2f50%2f01_big.jpg&ehk=8Vd150Mmc0h0q25NvlWD8hMeKosGZV28kLgBetoCZP0%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
    },
    "Technische Hochschule Ingolstadt": {
        "canonical_name": "Technical University Ingolstadt (THI)",
        "image_url": "https://images.shiksha.com/mediadata/images/1433750219phpHsxDvk_g.jpg"
    },
    "FH Aachen University of Applied Sciences": {
        "canonical_name": "FH Aachen University of Applied Sciences",
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.QukncBpOLKiHr5-M8QZ01QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    "TH Köln": {
        "canonical_name": "TH Köln (University of Applied Sciences)",
        "image_url": "https://www.uas7.org/sites/default/files/styles/embedded_desktop/public/2020-04/th-kapln_claudiusstrasse.jpg?itok=8nedc8kj"
    },
    "University of Siegen": {
        "canonical_name": "University of Siegen",
        "image_url": "https://www.kalzip.com/wp-content/uploads/2021/08/Kalzip-uni-Siegen-1.jpg"
    },
    "Rosenheim Technical University": {
        "canonical_name": "Rosenheim Technical University of Applied Sciences",
        "image_url": "https://www.azent.com/beta/_next/image?url=https:%2F%2Fazent-cdn.s3.ap-south-1.amazonaws.com%2Funiversities%2Frosenheim-technical-university-of-applied-sciences%2Frosenheim-technical-university-of-applied-sciences_cover_original.png&w=1920&q=75"
    },
     "Emden/Leer": {
        "canonical_name": "University of Applied Sciences Emden/Leer",
        "image_url": "http://www.uni-assist.de/fileadmin/_processed_/d/1/csm_hs-emden-leer_Prof._Dr._Erhard_Buehler_7a6cc7b544.jpg"
    },
    "Wismar": {
        "canonical_name": "University of Applied Sciences, Technology, Business and Design Wismar",
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.x7Rv_GmSvwwuyEir_hoAHQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    "Zwickau": {
        "canonical_name": "West Saxon University of Applied Sciences of Zwickau",
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.cjaze87Sj34ZBmG_ChfukAHaDy?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    "Deggendorf": {
        "canonical_name": "Deggendorf Institute of Technology (THD)",
        "image_url": "https://images.shiksha.com/mediadata/images/1632397993phpYHNUGk_g.jpg"
    },
    "Fresenius": {
        "canonical_name": "Fresenius University of Applied Sciences",
        "image_url": "https://www.hs-fresenius.de/wp-content/uploads/OC_Studieren_in_Koeln_P2_768_1024.png"
    },
    "Hamburg University of Applied Sciences": {
        "canonical_name": "Hamburg University of Applied Sciences (HAW Hamburg)",
        "image_url": "https://images.shiksha.com/mediadata/images/1656409399phptrfUlH_g.jpg"
    },
    "Private University of Applied Sciences Göttingen": {
        "canonical_name": "Private University of Applied Sciences Göttingen (PFH)",
        "image_url": "https://images.shiksha.com/mediadata/images/1657874366php1skDrf_g.jpg"
    },
    "Hof University": {
        "canonical_name": "Hof University of Applied Sciences",
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.a4Mcqsn63erFsA2EUe6sCQHaEx?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    "Ruhr University Bochum": {
        "canonical_name": "Ruhr University Bochum (RUB)",
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.BenhWjI8UgU2OS2mVpcYfAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    "Technical University Nuremberg": {
        "canonical_name": "Technical University Nuremberg (TH Nuremberg)",
        "image_url": "https://beyondthestates.com/wp-content/uploads/2023/06/4-13.jpg"
    },
    "German International University": {
        "canonical_name": "German International University (GIU)",
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.eIux-qrapPJpEg5239REPwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    "Trier University of Applied Sciences": {
        "canonical_name": "Trier University of Applied Sciences",
        "image_url": "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_auto/element/17/172046_171832_UCB_Campus.jpeg"
    },
    "University of Kassel": {
        "canonical_name": "University of Kassel",
        "image_url": "https://images.shiksha.com/mediadata/images/1639390143php2PRki5_1280x960.jpg"
    },
    "University of Trier": {
        "canonical_name": "University of Trier",
        "image_url": "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_auto/element/17/172046_171832_UCB_Campus.jpeg"
    },
    "Leuphana University": {
        "canonical_name": "Leuphana University of Lüneburg",
        "image_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/81555f72256151.5be17a5339726.jpg"
    }
}

def get_university_details(name):
    """
    Finds the canonical name and image URL for a university from the mapping.
    Uses partial matching to find the correct entry.
    """
    if not isinstance(name, str):
        return name, f"https://placehold.co/400x200/F97316/FFFFFF?text=University&font=raleway"

    # Direct match check first
    for key, details in UNIVERSITY_MAPPING.items():
        if key.lower() in name.lower():
            return details["canonical_name"], details["image_url"]
    
    # Fallback to a generated placeholder if no match is found
    placeholder_text = name.split('(')[0].strip()
    image_url = f"https://placehold.co/400x200/F97316/FFFFFF?text={placeholder_text}&font=raleway"
    return name, image_url


# --- Helper Function for Data Cleaning ---
def normalize_experience(value):
    try:
        text = str(value).lower().strip()
        numbers = re.findall(r'(\d+\.?\d*)', text)
        if not numbers:
            return 0.0
        num = float(numbers[0])
        if 'week' in text: return num / 52.0
        elif 'month' in text: return num / 12.0
        elif 'year' in text: return num
        else: return num
    except (ValueError, TypeError):
        return 0.0

def clean_university_name(name):
    """
    Cleans university names by removing newlines, extra whitespace,
    and standardizing spacing.
    """
    if not isinstance(name, str):
        return name
    # Replace newline characters with a space, then replace multiple spaces with a single space, and strip leading/trailing whitespace.
    cleaned_name = re.sub(r'\s+', ' ', name.replace('\n', ' ')).strip()
    return cleaned_name

# --- FastAPI Application Setup ---
app = FastAPI()
origins = ["http://localhost:3000", "http://localhost:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- MODIFICATION START: Load Master's and Bachelor's data separately ---
df_masters = pd.DataFrame()
df_bachelors = pd.DataFrame()

try:
    # Load Master's data (all xlsx files except bachelors.xlsx)
    print("Searching for Master's degree Excel files (.xlsx)...")
    all_excel_files = glob.glob("*.xlsx")
    masters_files = [f for f in all_excel_files if 'bachelors.xlsx' not in f.lower() and 'german_universities_with_search_links' not in f.lower()]
    
    if not masters_files:
        print("Warning: No Excel files for Master's degrees found.")
    else:
        print(f"Found {len(masters_files)} Master's files: {masters_files}")
        all_dfs = []
        POSSIBLE_DEGREE_COLS = ['M.A/M.Eng/M.Sc/ MBA', 'Degree', 'Degree Level', 'Program Type']
        POSSIBLE_EXP_COLS = ['Work Experience (in years)', 'Work Experience', 'Experience']
        for file_path in masters_files:
            print(f"Processing Master's file: {file_path}...")
            temp_df = pd.read_excel(file_path, header=None)
            first_row_headers = temp_df.iloc[1].values
            third_row_headers = temp_df.iloc[2].values
            new_header = list(first_row_headers[:3]) + list(third_row_headers[3:])
            temp_df.columns = new_header
            temp_df = temp_df.drop([0, 1, 2]).reset_index(drop=True)
            temp_df.columns = temp_df.columns.astype(str).str.strip()
            cols = pd.Series(temp_df.columns)
            for dup in cols[cols.duplicated()].unique():
                cols[cols[cols == dup].index.values.tolist()] = [dup + '_' + str(i) if i != 0 else dup for i in range(sum(cols == dup))]
            temp_df.columns = cols
            for col_name in POSSIBLE_DEGREE_COLS:
                if col_name in temp_df.columns:
                    temp_df.rename(columns={col_name: 'standardized_degree_type'}, inplace=True)
                    break
            for col_name in POSSIBLE_EXP_COLS:
                if col_name in temp_df.columns:
                    temp_df['standardized_work_experience_years'] = temp_df[col_name].apply(normalize_experience)
                    break
            all_dfs.append(temp_df)
        df_masters = pd.concat(all_dfs, ignore_index=True)
        if 'Name of Universities' in df_masters.columns:
            df_masters['Name of Universities'] = df_masters['Name of Universities'].apply(clean_university_name)
        print("Master's data loaded and cleaned successfully!")

    # Load Bachelor's data (only bachelors.xlsx)
    print("Searching for Bachelor's degree file (bachelors.xlsx)...")
    bachelor_file_found = False
    for f in all_excel_files:
        if 'bachelors.xlsx' in f.lower():
            bachelor_file_found = True
            print("Found bachelors.xlsx. Loading data...")
            df_bachelors = pd.read_excel(f)
            df_bachelors.columns = ['Name of Universities', 'Name of Program']
            if 'Name of Universities' in df_bachelors.columns:
                df_bachelors['Name of Universities'] = df_bachelors['Name of Universities'].apply(clean_university_name)
            print("Bachelor's data loaded successfully!")
            break
    if not bachelor_file_found:
        print("Warning: bachelors.xlsx not found. Bachelor's search will return no results.")


except Exception as e:
    print(f"An error occurred during data loading: {e}")
# --- MODIFICATION END ---

# --- API Endpoint ---
@app.get("/api/universities")
def get_universities(
    university: str | None = None,
    program: str | None = None,
    degree_type: str | None = None,
    language: str | None = None,
    work_experience: float | None = None,
    ielts: float | None = None,
    toefl: float | None = None,
    gre: int | None = None,
    gmat: int | None = None
):
    # --- MODIFICATION START: Conditional logic based on degree type ---
    is_bachelors_search = degree_type and 'bachelors' in degree_type.lower()

    if is_bachelors_search:
        if df_bachelors.empty:
            return []
        query_df = df_bachelors.copy()
        if program:
            PROGRAM_KEYWORDS = { 'business': ['business', 'management', 'mba', 'finance', 'commerce', 'marketing', 'administration', 'economic'], 'computer science': ['computer science', 'it', 'information technology', 'software', 'data science', 'artificial intelligence', 'ai', 'cybersecurity', 'computing'], 'engineering': ['engineering', 'mechanical', 'electrical', 'civil', 'chemical', 'mechatronics', 'automotive'], 'social': ['social science', 'arts', 'humanities', 'international relations', 'political', 'sociology'], 'architecture': ['architecture', 'urban design', 'planning'], 'hospitality': ['hospitality', 'tourism', 'hotel management', 'event management'], 'science': ['science', 'physics', 'chemistry', 'biology', 'biotechnology'], 'sports': ['sport', 'fitness', 'athletics', 'physical education'], 'arts': ['fine arts', 'art', 'music', 'theatre', 'design', 'visual arts'], 'law': ['law', 'legal', 'jurisprudence', 'llm'], 'education': ['education', 'teaching', 'pedagogy'], 'mathematics': ['mathematics', 'statistics', 'actuarial science'], 'medicine': ['medicine', 'health', 'medical', 'nursing', 'pharma', 'physiotherapy'], 'journalism': ['journalism', 'media', 'communication', 'mass communication'], 'agriculture': ['agriculture', 'forestry', 'horticulture', 'agribusiness']}
            clean_program = program.lower().strip()
            keywords_to_search = None
            for key, keywords in PROGRAM_KEYWORDS.items():
                if key in clean_program:
                    keywords_to_search = keywords
                    break
            if keywords_to_search:
                regex_pattern = '|'.join(keywords_to_search)
                query_df = query_df[query_df['Name of Program'].astype(str).str.contains(regex_pattern, case=False, na=False, regex=True)]
            else:
                query_df = query_df[query_df['Name of Program'].astype(str).str.contains(program, case=False, na=False)]
    else: 
        if df_masters.empty:
            return {"error": "Master's degree data not available. Check server logs."}
        query_df = df_masters.copy()
        if university:
            query_df = query_df[query_df['Name of Universities'].astype(str).str.contains(university, case=False, na=False)]
        if program:
            PROGRAM_KEYWORDS = { 'business': ['business', 'management', 'mba', 'finance', 'commerce', 'marketing', 'administration', 'economic'], 'computer science': ['computer science', 'it', 'information technology', 'software', 'data science', 'artificial intelligence', 'ai', 'cybersecurity', 'computing'], 'engineering': ['engineering', 'mechanical', 'electrical', 'civil', 'chemical', 'mechatronics', 'automotive'], 'social': ['social science', 'arts', 'humanities', 'international relations', 'political', 'sociology'], 'architecture': ['architecture', 'urban design', 'planning'], 'hospitality': ['hospitality', 'tourism', 'hotel management', 'event management'], 'science': ['science', 'physics', 'chemistry', 'biology', 'biotechnology'], 'sports': ['sport', 'fitness', 'athletics', 'physical education'], 'arts': ['fine arts', 'art', 'music', 'theatre', 'design', 'visual arts'], 'law': ['law', 'legal', 'jurisprudence', 'llm'], 'education': ['education', 'teaching', 'pedagogy'], 'mathematics': ['mathematics', 'statistics', 'actuarial science'], 'medicine': ['medicine', 'health', 'medical', 'nursing', 'pharma', 'physiotherapy'], 'journalism': ['journalism', 'media', 'communication', 'mass communication'], 'agriculture': ['agriculture', 'forestry', 'horticulture', 'agribusiness']}
            clean_program = program.lower().strip()
            keywords_to_search = None
            for key, keywords in PROGRAM_KEYWORDS.items():
                if key in clean_program:
                    keywords_to_search = keywords
                    break
            if keywords_to_search:
                regex_pattern = '|'.join(keywords_to_search)
                query_df = query_df[query_df['Name of Program'].astype(str).str.contains(regex_pattern, case=False, na=False, regex=True)]
            else:
                query_df = query_df[query_df['Name of Program'].astype(str).str.contains(program, case=False, na=False)]
        if language:
            query_df = query_df[query_df['English/ German'].astype(str).str.contains(language, case=False, na=False)]
        if work_experience is not None and 'standardized_work_experience_years' in query_df.columns:
            numeric_col = pd.to_numeric(query_df['standardized_work_experience_years'], errors='coerce')
            query_df = query_df[(numeric_col <= work_experience) | (numeric_col.isnull())]
        for score_param, col_name in [(ielts, 'IELTS'), (toefl, 'TOFL'), (gre, 'GRE'), (gmat, 'GMAT')]:
            if score_param is not None and col_name in query_df.columns:
                numeric_col = pd.to_numeric(query_df[col_name], errors='coerce')
                query_df = query_df[(numeric_col <= score_param) | (numeric_col.isnull())]

    if not query_df.empty:
        dedupe_cols = ['Name of Universities', 'Name of Program']
        existing_dedupe_cols = [col for col in dedupe_cols if col in query_df.columns]
        if existing_dedupe_cols:
            query_df.drop_duplicates(subset=existing_dedupe_cols, keep='first', inplace=True)
    
    # --- ADD CANONICAL NAME AND IMAGE URL ---
    if not query_df.empty and 'Name of Universities' in query_df.columns:
        details = query_df['Name of Universities'].apply(get_university_details)
        query_df['canonical_name'] = details.apply(lambda x: x[0])
        query_df['image_url'] = details.apply(lambda x: x[1])

    cleaned_df = query_df.astype(object).where(pd.notnull(query_df), None)
    return cleaned_df.to_dict('records')

@app.get("/api/university-names")
def get_university_names():
    master_names = pd.Series(dtype=str)
    bachelor_names = pd.Series(dtype=str)

    if not df_masters.empty and 'Name of Universities' in df_masters.columns:
        master_names = df_masters['Name of Universities'].dropna().unique()

    if not df_bachelors.empty and 'Name of Universities' in df_bachelors.columns:
        bachelor_names = df_bachelors['Name of Universities'].dropna().unique()
    
    combined_names = pd.concat([pd.Series(master_names), pd.Series(bachelor_names)], ignore_index=True)
    unique_names = combined_names.dropna().unique().tolist()
    
    return sorted(unique_names)

@app.get("/")
def read_root():
    return {"message": "Welcome to the University Shortlisting API!"}

